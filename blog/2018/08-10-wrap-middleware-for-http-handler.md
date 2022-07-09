---
title: 给http.Handler包装中间件
authors: inhere
tags: [golang, http]
date: 2018-08-10T22:00
slug: wrap-middleware-for-http-handler-in-golang
---

Golang 下给 http.Handler 包装中间件


<!--truncate-->

```go
package main

import "net/http"

func main() {
    handler := http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
        w.Write([]byte("-O-"))
    })

    mdl1 := func(h http.Handler) http.Handler {
        return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
            w.Write([]byte("a"))
            h.ServeHTTP(w, r)
            w.Write([]byte("A"))
        })
    }
    mdl2 := func(h http.Handler) http.Handler {
        return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
            w.Write([]byte("b"))
            h.ServeHTTP(w, r)
            w.Write([]byte("B"))
        })
    }

    wrapped := WrapHttpHandlers(handler, mdl1, mdl2)

    http.ListenAndServe(":8080", wrapped)
    // Output:
    // ab-O-BA
}

// WrapHttpHandlers apply some pre http handlers for the main handler.
func WrapHttpHandlers(mainHandler http.Handler, middleware ...func(h http.Handler) http.Handler) http.Handler {
    var wrapped http.Handler
    max := len(middleware)
    lst := make([]int, max)

    for i := range lst {
        current := max - i - 1
        if i == 0 {
            wrapped = middleware[current](mainHandler)
        } else {
            wrapped = middleware[current](wrapped)
        }
    }

    return wrapped
}
```