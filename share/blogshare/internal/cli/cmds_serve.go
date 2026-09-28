package cli

import (
	"context"
	"errors"
	"fmt"
	"io/fs"
	"net"
	"net/http"
	"os"
	"os/signal"
	"syscall"
	"time"

	"github.com/gookit/goutil/cflag/capp"
	"github.com/gookit/goutil/sysutil"
	"github.com/inhere/blogshare/internal/store"
	"github.com/inhere/blogshare/internal/webui"
)

// newServeCmd starts the read-only web view.
func newServeCmd(content fs.FS) *capp.Cmd {
	var (
		addr  string
		open  bool
		quiet bool
	)

	cmd := capp.NewCmd("serve", "Serve the read-only web view of all records", func(c *capp.Cmd) error {
		paths, err := store.Locate(rootFlag, fileFlag)
		if err != nil {
			return err
		}

		srv := &http.Server{
			Addr:              addr,
			Handler:           webui.New(paths, content).Handler(),
			ReadHeaderTimeout: 5 * time.Second,
		}

		ln, err := net.Listen("tcp", addr)
		if err != nil {
			return fmt.Errorf("listen on %s: %w", addr, err)
		}

		if !quiet {
			fmt.Printf("blogshare web view: http://%s\n", ln.Addr().String())
			fmt.Printf("records: %s\n", paths.RecordsFile)
			fmt.Printf("content: %s\n", paths.ContentDir)
		}

		if open {
			go func() {
				time.Sleep(300 * time.Millisecond)
				_ = sysutil.OpenBrowser("http://" + ln.Addr().String())
			}()
		}

		errCh := make(chan error, 1)
		go func() { errCh <- srv.Serve(ln) }()

		stop := make(chan os.Signal, 1)
		signal.Notify(stop, os.Interrupt, syscall.SIGTERM)
		select {
		case err := <-errCh:
			if err != nil && !errors.Is(err, http.ErrServerClosed) {
				return err
			}
		case <-stop:
			if !quiet {
				fmt.Println("\nshutting down…")
			}
			ctx, cancel := context.WithTimeout(context.Background(), 3*time.Second)
			defer cancel()
			_ = srv.Shutdown(ctx)
		}
		return nil
	})

	cmd.Config(addCommonFlags, func(c *capp.Cmd) {
		c.StringVar(&addr, "addr", "127.0.0.1:8790", "listen address;a")
		c.BoolVar(&open, "open", false, "open the page in a browser;o")
		c.BoolVar(&quiet, "quiet", false, "do not print the startup banner;q")
	})
	return cmd
}
