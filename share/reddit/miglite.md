# miglite

## Title

I built a small Go migration tool for projects that prefer raw SQL files

## Post

I built a small Go migration tool called miglite.

It is intentionally simple: raw SQL files with `UP/DOWN` sections, ordered execution, migration status tracking, and no bundled DB driver dependency when used as a library.

Example:

```sql
-- Migrate:UP
CREATE TABLE users (
  id INTEGER PRIMARY KEY,
  name TEXT NOT NULL
);

-- Migrate:DOWN
DROP TABLE users;
```

CLI flow:

```bash
miglite create add-users-table
miglite up --yes
miglite status
miglite down
```

It supports SQLite/MySQL/PostgreSQL in the CLI, `DATABASE_URL`, multiple migration directories, and transaction-based execution where the DB supports it.

I wrote more about the design trade-offs here:
https://inhere.github.io/en/blog/2026/gookit-miglite-intro/

Repo: https://github.com/gookit/miglite

Curious how others here handle migrations in small Go services: raw SQL files, schema DSL, or something else?
