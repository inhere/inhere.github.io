// Package webui serves the read-only web view over the share records.
package webui

import (
	"encoding/json"
	"fmt"
	"io/fs"
	"net/http"
	"strings"
	"time"

	"github.com/inhere/blogshare/internal/model"
	"github.com/inhere/blogshare/internal/posts"
	"github.com/inhere/blogshare/internal/report"
	"github.com/inhere/blogshare/internal/sites"
	"github.com/inhere/blogshare/internal/store"
)

// Server renders the embedded UI and the JSON API.
type Server struct {
	paths   store.Paths
	content fs.FS
}

// New creates a server for the given paths; assets is the embedded web dir.
func New(paths store.Paths, assets fs.FS) *Server {
	return &Server{paths: paths, content: assets}
}

// Handler builds the HTTP routes.
func (s *Server) Handler() http.Handler {
	mux := http.NewServeMux()
	mux.HandleFunc("/", s.handleIndex)
	mux.HandleFunc("/api/summary", s.handleSummary)
	mux.HandleFunc("/api/records", s.handleRecords)
	mux.HandleFunc("/api/pending", s.handlePending)
	mux.HandleFunc("/api/sites", s.handleSites)
	mux.HandleFunc("/api/posts", s.handlePosts)
	mux.HandleFunc("/api/stats", s.handleStats)
	return mux
}

// dataset re-reads the event log and rebuilds every view, so the page always
// shows the file as it is on disk.
func (s *Server) dataset() (report.Dataset, error) {
	st := store.New(s.paths.RecordsFile)
	records, err := st.Load()
	if err != nil {
		return report.Dataset{}, err
	}
	postList, err := posts.Scan(s.paths.ContentDir)
	if err != nil {
		return report.Dataset{}, err
	}

	return report.Build(report.Options{
		Records:     records,
		Posts:       postList,
		Sites:       sites.All(),
		DraftExists: store.DraftExists(s.paths.Root),
		Now:         time.Now(),
	}), nil
}

func (s *Server) handleIndex(w http.ResponseWriter, r *http.Request) {
	if r.URL.Path != "/" {
		if strings.HasPrefix(r.URL.Path, "/api/") {
			writeError(w, http.StatusNotFound, "unknown endpoint: "+r.URL.Path)
			return
		}
		writeError(w, http.StatusNotFound, "not found: "+r.URL.Path)
		return
	}

	data, err := fs.ReadFile(s.content, "web/index.html")
	if err != nil {
		writeError(w, http.StatusInternalServerError, "embedded web/index.html missing: "+err.Error())
		return
	}
	w.Header().Set("Content-Type", "text/html; charset=utf-8")
	w.Header().Set("Cache-Control", "no-store")
	_, _ = w.Write(data)
}

func (s *Server) handleSummary(w http.ResponseWriter, _ *http.Request) {
	ds, err := s.dataset()
	if err != nil {
		writeError(w, http.StatusInternalServerError, err.Error())
		return
	}
	writeJSON(w, ds.Summary)
}

func (s *Server) handleRecords(w http.ResponseWriter, r *http.Request) {
	ds, err := s.dataset()
	if err != nil {
		writeError(w, http.StatusInternalServerError, err.Error())
		return
	}

	q := r.URL.Query()
	items := report.FilterRecords(ds.Records, report.Filter{
		ID:     q.Get("id"),
		Post:   q.Get("post"),
		Site:   q.Get("site"),
		Status: q.Get("status"),
		Query:  q.Get("q"),
	})
	writeJSON(w, map[string]any{"total": len(items), "items": items})
}

func (s *Server) handlePending(w http.ResponseWriter, r *http.Request) {
	ds, err := s.dataset()
	if err != nil {
		writeError(w, http.StatusInternalServerError, err.Error())
		return
	}

	postKey := model.NormalizePost(r.URL.Query().Get("post"))
	items := ds.Pending
	if postKey != "" {
		items = report.PendingFor(ds, postKey)
	}
	writeJSON(w, map[string]any{"total": len(items), "items": items})
}

func (s *Server) handleSites(w http.ResponseWriter, _ *http.Request) {
	ds, err := s.dataset()
	if err != nil {
		writeError(w, http.StatusInternalServerError, err.Error())
		return
	}
	writeJSON(w, map[string]any{"total": len(ds.Sites), "items": ds.Sites})
}

func (s *Server) handlePosts(w http.ResponseWriter, _ *http.Request) {
	ds, err := s.dataset()
	if err != nil {
		writeError(w, http.StatusInternalServerError, err.Error())
		return
	}
	writeJSON(w, map[string]any{"total": len(ds.Posts), "items": ds.Posts})
}

func (s *Server) handleStats(w http.ResponseWriter, _ *http.Request) {
	ds, err := s.dataset()
	if err != nil {
		writeError(w, http.StatusInternalServerError, err.Error())
		return
	}
	writeJSON(w, ds.Stats)
}

func writeJSON(w http.ResponseWriter, v any) {
	data, err := json.Marshal(v)
	if err != nil {
		writeError(w, http.StatusInternalServerError, err.Error())
		return
	}
	w.Header().Set("Content-Type", "application/json; charset=utf-8")
	w.Header().Set("Cache-Control", "no-store")
	_, _ = w.Write(data)
}

func writeError(w http.ResponseWriter, code int, msg string) {
	w.Header().Set("Content-Type", "application/json; charset=utf-8")
	w.WriteHeader(code)
	_, _ = fmt.Fprintf(w, `{"error":%q}`, msg)
}
