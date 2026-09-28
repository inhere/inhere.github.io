package store

import (
	"fmt"
	"os"
	"path/filepath"

	"github.com/gookit/goutil/fsutil"
)

// Paths holds the resolved blog repository layout used by all commands.
type Paths struct {
	// Root is the blog repository root.
	Root string
	// ContentDir is the zola content directory (Root/content).
	ContentDir string
	// ShareDir is the directory of share drafts (Root/share).
	ShareDir string
	// RecordsFile is the JSONL event log (Root/share/records.jsonl by default).
	RecordsFile string
}

// Locate resolves the repository root and record file.
//
// rootFlag empty: walk up from the working directory until a zola site is
// found (config.toml + content/); falling back to the working directory.
// fileFlag empty: <root>/share/records.jsonl, otherwise the given path relative
// to the root (or absolute).
func Locate(rootFlag, fileFlag string) (Paths, error) {
	root := rootFlag
	if root == "" {
		cwd, err := os.Getwd()
		if err != nil {
			return Paths{}, fmt.Errorf("get working dir: %w", err)
		}
		root = FindRoot(cwd)
	} else {
		abs, err := filepath.Abs(rootFlag)
		if err != nil {
			return Paths{}, fmt.Errorf("resolve root %q: %w", rootFlag, err)
		}
		root = abs
		if !fsutil.IsDir(root) {
			return Paths{}, fmt.Errorf("root dir not found: %s", root)
		}
	}

	records := fileFlag
	if records == "" {
		records = filepath.Join(root, "share", "records.jsonl")
	} else if !filepath.IsAbs(records) {
		records = filepath.Join(root, records)
	}

	return Paths{
		Root:        root,
		ContentDir:  filepath.Join(root, "content"),
		ShareDir:    filepath.Join(root, "share"),
		RecordsFile: records,
	}, nil
}

// DraftExists returns a checker for repository relative draft paths.
func DraftExists(root string) func(string) bool {
	return func(rel string) bool {
		if rel == "" {
			return false
		}
		p := filepath.FromSlash(rel)
		if !filepath.IsAbs(p) {
			p = filepath.Join(root, p)
		}
		st, err := os.Stat(p)
		return err == nil && !st.IsDir()
	}
}

// FindRoot walks upwards from dir looking for a zola site root.
func FindRoot(dir string) string {
	cur := dir
	for {
		if fsutil.IsFile(filepath.Join(cur, "config.toml")) && fsutil.IsDir(filepath.Join(cur, "content")) {
			return cur
		}
		parent := filepath.Dir(cur)
		if parent == cur {
			return dir
		}
		cur = parent
	}
}
