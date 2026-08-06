# Next.js Tasks App (MongoDB Edition) — Full Code for Every File

Complete, runnable code for every file, with MongoDB as the real database instead of
the in-memory array. Copy each block into the matching path.


nextjs Project :- 
npx create-next-app@latest
 my-app

```
my-app/
├── app/
│   ├── layout.js
│   ├── page.js
│   ├── globals.css
│   ├── tasks/
│   │   ├── page.js
│   │   ├── [id]/page.js
│   │   └── new/page.js
│   └── api/
│       └── tasks/
│           ├── route.js
│           └── [id]/route.js
├── components/
│   ├── TaskForm.js
│   ├── TaskList.js
│   └── TaskItem.js
├── lib/
│   ├── mongodb.js        # NEW — the database connection
│   └── db.js             # UPDATED — now queries MongoDB
├── next.config.js
├── package.json
└── .env.local             # UPDATED — now holds MONGODB_URI
```

---

## 1. Install the MongoDB driver

```bash
npm install mongodb
```

---

## 2. `.env.local`

```bash
# .env.local
MONGODB_URI="mongodb://localhost:27017/tasksdb"
# Or, using MongoDB Atlas:
# MONGODB_URI="mongodb+srv://<username>:<password>@<cluster-url>/tasksdb?retryWrites=true&w=majority"

NEXT_PUBLIC_APP_NAME="Tasks App"
```

Quick local MongoDB via Docker (no Atlas signup needed):
```bash
docker run -d -p 27017:27017 --name mongo-tasks mongo:7
```

---

## 3. `lib/mongodb.js` — connection singleton (new file)

Caches the connection on `global` so Next.js's dev-mode hot-reloading doesn't open a
new connection on every save.

```js
// lib/mongodb.js
import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI;

if (!uri) {
  throw new Error("Missing MONGODB_URI in .env.local");
}

const options = {};

let client;
let clientPromise;

if (process.env.NODE_ENV === "development") {
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri, options);
    global._mongoClientPromise = client.connect();
  }
  clientPromise = global._mongoClientPromise;
} else {
  client = new MongoClient(uri, options);
  clientPromise = client.connect();
}

export default clientPromise;
```

---

## 4. `lib/db.js` — updated to use MongoDB

Same exported shape as the in-memory version (`getAll`, `getById`, `create`, `update`,
`remove`) — so every API route below stays identical in structure to before.

```js
// lib/db.js
import clientPromise from "./mongodb";
import { ObjectId } from "mongodb";

const DB_NAME = "tasksdb";
const COLLECTION = "tasks";

async function getCollection() {
  const client = await clientPromise;
  const db = client.db(DB_NAME);
  return db.collection(COLLECTION);
}

// Convert MongoDB's `_id` into a plain `id` string for the frontend
function formatTask(doc) {
  if (!doc) return null;
  return {
    id: doc._id.toString(),
    title: doc.title,
    done: doc.done,
  };
}

export const db = {
  getAll: async () => {
    const collection = await getCollection();
    const docs = await collection.find({}).sort({ _id: -1 }).toArray();
    return docs.map(formatTask);
  },

  getById: async (id) => {
    if (!ObjectId.isValid(id)) return null;
    const collection = await getCollection();
    const doc = await collection.findOne({ _id: new ObjectId(id) });
    return formatTask(doc);
  },

  create: async (data) => {
    const collection = await getCollection();
    const result = await collection.insertOne({
      title: data.title,
      done: false,
    });
    return formatTask({ _id: result.insertedId, title: data.title, done: false });
  },

update: async (id, data) => {
    if (!ObjectId.isValid(id)) return null;

    const collection = await getCollection();

    await collection.updateOne(
        { _id: new ObjectId(id) },
        { $set: data }
    );

    const updatedDoc = await collection.findOne({
        _id: new ObjectId(id)
    });

    return formatTask(updatedDoc);
},

  remove: async (id) => {
    if (!ObjectId.isValid(id)) return false;
    const collection = await getCollection();
    const result = await collection.deleteOne({ _id: new ObjectId(id) });
    return result.deletedCount === 1;
  },
};
```

---

## 5. `app/api/tasks/route.js`

Handles the collection: list all tasks, create a new one. `db.getAll()` and
`db.create()` are now async, so we `await` them — that's the only change from the
in-memory version.

```js
// app/api/tasks/route.js
import { db } from "@/lib/db";
import { NextResponse } from "next/server";

// GET /api/tasks — list all tasks
export async function GET() {
  const tasks = await db.getAll();
  return NextResponse.json(tasks);
}

// POST /api/tasks — create a new task
export async function POST(request) {
  const body = await request.json();

  if (!body.title || typeof body.title !== "string") {
    return NextResponse.json({ error: "title is required" }, { status: 400 });
  }

  const task = await db.create(body);
  return NextResponse.json(task, { status: 201 });
}
```

---

## 6. `app/api/tasks/[id]/route.js`

Handles a single task: read one, update, delete.

```js
// app/api/tasks/[id]/route.js
import { db } from "@/lib/db";
import { NextResponse } from "next/server";

// GET /api/tasks/:id — read one task
export async function GET(request, { params }) {
  const { id } = await params;
  const task = await db.getById(id);

  if (!task) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }
  return NextResponse.json(task);
}

// PUT /api/tasks/:id — update a task
export async function PUT(request, { params }) {
  const { id } = await params;
  const body = await request.json();
  const updated = await db.update(id, body);

  if (!updated) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }
  return NextResponse.json(updated);
}

// DELETE /api/tasks/:id — delete a task
export async function DELETE(request, { params }) {
    const { id } = await params;

    const ok = await db.remove(id);

    if (!ok) {
        return NextResponse.json(
            { error: "Not found" },
            { status: 404 }
        );
    }

    return NextResponse.json({
        message: "Deleted"
    });
}

```

---

## 7. `components/TaskItem.js`

Renders a single task row with a "toggle done" checkbox and a delete button. No change
from before — `task.id` is now a MongoDB-derived string instead of a number, and this
component never cared what type `id` was.

```jsx
// components/TaskItem.js
"use client";

export default function TaskItem({ task, onToggle, onDelete }) {
  return (
    <li style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "8px" }}>
      <input
        type="checkbox"
        checked={task.done}
        onChange={() => onToggle(task.id, !task.done)}
      />
      <span style={{ textDecoration: task.done ? "line-through" : "none" }}>
        {task.title}
      </span>
      <button onClick={() => onDelete(task.id)}>Delete</button>
    </li>
  );
}
```

---

## 8. `components/TaskList.js`

```jsx
// components/TaskList.js
"use client";
import TaskItem from "./TaskItem";

export default function TaskList({ tasks, onToggle, onDelete }) {
  if (tasks.length === 0) {
    return <p>No tasks yet. Add one below!</p>;
  }

  return (
    <ul style={{ listStyle: "none", padding: 0 }}>
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} onToggle={onToggle} onDelete={onDelete} />
      ))}
    </ul>
  );
}
```

---

## 9. `components/TaskForm.js`

```jsx
// components/TaskForm.js
"use client";
import { useState } from "react";

export default function TaskForm({ onSubmit }) {
  const [title, setTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;
    onSubmit(title);
    setTitle("");
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: "flex", gap: "8px" }}>
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="New task title"
      />
      <button type="submit">Add Task</button>
    </form>
  );
}
```

---

## 10. `app/tasks/page.js`

```jsx
// app/tasks/page.js
"use client";
import { useEffect, useState } from "react";
import TaskList from "@/components/TaskList";
import TaskForm from "@/components/TaskForm";

export default function TasksPage() {
  const [tasks, setTasks] = useState([]);

  const loadTasks = async () => {
    const res = await fetch("/api/tasks");
    const data = await res.json();
    setTasks(data);
  };

  useEffect(() => {
    loadTasks();
  }, []);

  const handleCreate = async (title) => {
    await fetch("/api/tasks", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title }),
    });
    loadTasks();
  };

  const handleToggle = async (id, done) => {
    await fetch(`/api/tasks/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ done }),
    });
    loadTasks();
  };

  const handleDelete = async (id) => {
    await fetch(`/api/tasks/${id}`, { method: "DELETE" });
    loadTasks();
  };

  return (
    <main style={{ maxWidth: "500px", margin: "40px auto", fontFamily: "sans-serif" }}>
      <h1>Tasks</h1>
      <TaskForm onSubmit={handleCreate} />
      <TaskList tasks={tasks} onToggle={handleToggle} onDelete={handleDelete} />
    </main>
  );
}
```

---

## 11. `app/tasks/new/page.js`

```jsx
// app/tasks/new/page.js
"use client";
import { useRouter } from "next/navigation";
import TaskForm from "@/components/TaskForm";

export default function NewTaskPage() {
  const router = useRouter();

  const handleCreate = async (title) => {
    await fetch("/api/tasks", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title }),
    });
    router.push("/tasks");
  };

  return (
    <main style={{ maxWidth: "500px", margin: "40px auto", fontFamily: "sans-serif" }}>
      <h1>New Task</h1>
      <TaskForm onSubmit={handleCreate} />
    </main>
  );
}
```

---

## 12. `app/tasks/[id]/page.js`

Server Component — the `id` in the URL is now a MongoDB ObjectId string
(e.g. `/tasks/6620f1a2b3c4d5e6f7890abc`) instead of a small integer.

```jsx
// app/tasks/[id]/page.js
import Link from "next/link";

export default async function TaskDetailPage({ params }) {
  const { id } = await params;
  const res = await fetch(`http://localhost:3000/api/tasks/${id}`, { cache: "no-store" });

  if (!res.ok) {
    return <p>Task not found.</p>;
  }

  const task = await res.json();

  return (
    <main style={{ maxWidth: "500px", margin: "40px auto", fontFamily: "sans-serif" }}>
      <h1>{task.title}</h1>
      <p>Status: {task.done ? "✅ Done" : "⏳ Pending"}</p>
      <Link href="/tasks">← Back to all tasks</Link>
    </main>
  );
}
```

---

## 13. `app/page.js`

```jsx
// app/page.js
import Link from "next/link";

export default function HomePage() {
  return (
    <main style={{ maxWidth: "500px", margin: "40px auto", fontFamily: "sans-serif" }}>
      <h1>Welcome</h1>
      <p>This is the Tasks demo app.</p>
      <Link href="/tasks">Go to Tasks →</Link>
    </main>
  );
}
```

---

## 14. `app/layout.js`

```jsx
// app/layout.js
import "./globals.css";

export const metadata = {
  title: "Tasks App",
  description: "A simple Next.js CRUD demo backed by MongoDB",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
```

---

## 15. `app/globals.css`

```css
/* app/globals.css */
* {
  box-sizing: border-box;
}

body {
  margin: 0;
  padding: 0;
  background-color: #fafafa;
  color: #1a1a1a;
}

a {
  color: #0070f3;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}

button {
  cursor: pointer;
  padding: 4px 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background: white;
}

input {
  padding: 6px 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
}
```

---

## 16. `next.config.js`

```js
// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {};

module.exports = nextConfig;
```

---

## 17. `package.json`

Note the added `mongodb` dependency compared to the in-memory version.

```json
{
  "name": "my-app",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  },
  "dependencies": {
    "next": "^15.0.0",
    "react": "^18.3.0",
    "react-dom": "^18.3.0",
    "mongodb": "^6.8.0"
  },
  "devDependencies": {
    "eslint": "^8.57.0",
    "eslint-config-next": "^15.0.0"
  }
}
```

---

## 18. Hardened `app/tasks/page.js` — prevents double-fire + shows errors

This is the fix for the "404 on delete/toggle" issue: a `pendingIds` set blocks a
second click on the same task while its request is still in flight, and a visible
`error` message replaces the silent failure.

```jsx
// app/tasks/page.js
"use client";
import { useEffect, useState } from "react";
import TaskList from "@/components/TaskList";
import TaskForm from "@/components/TaskForm";

export default function TasksPage() {
  const [tasks, setTasks] = useState([]);
  const [error, setError] = useState("");
  const [pendingIds, setPendingIds] = useState(new Set());

  const loadTasks = async () => {
    try {
      const res = await fetch("/api/tasks");
      if (!res.ok) throw new Error(`Failed to load tasks (${res.status})`);
      setTasks(await res.json());
    } catch (err) {
      setError(err.message);
    }
  };

  useEffect(() => {
    loadTasks();
  }, []);

  const withPending = async (id, fn) => {
    if (pendingIds.has(id)) return; // block a second click while one is in flight
    setPendingIds((prev) => new Set(prev).add(id));
    setError("");
    try {
      await fn();
    } catch (err) {
      setError(err.message);
    } finally {
      setPendingIds((prev) => {
        const next = new Set(prev);
        next.delete(id);
        return next;
      });
    }
  };

  const handleCreate = async (title) => {
    const res = await fetch("/api/tasks", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title }),
    });
    if (!res.ok) throw new Error(`Failed to create task (${res.status})`);
    await loadTasks();
  };

  const handleToggle = (id, done) =>
    withPending(id, async () => {
      const res = await fetch(`/api/tasks/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ done }),
      });
      if (!res.ok) throw new Error(`Task not found or update failed (${res.status})`);
      await loadTasks();
    });

  const handleDelete = (id) =>
    withPending(id, async () => {
      const res = await fetch(`/api/tasks/${id}`, { method: "DELETE" });
      if (!res.ok) throw new Error(`Task not found or already deleted (${res.status})`);
      await loadTasks();
    });

  return (
    <main style={{ maxWidth: "500px", margin: "40px auto", fontFamily: "sans-serif" }}>
      <h1>Tasks</h1>
      {error && (
        <p style={{ color: "#c0392b", background: "#fdecea", padding: "8px", borderRadius: "4px" }}>
          {error}
        </p>
      )}
      <TaskForm onSubmit={handleCreate} />
      <TaskList tasks={tasks} onToggle={handleToggle} onDelete={handleDelete} />
    </main>
  );
}
```

**What changed and why:**
- `pendingIds` — a `Set` of task ids currently mid-request. A second click on the same task while it's pending is ignored outright, which is what stops the double-delete race that causes a 404 on the second call.
- Every `fetch` now checks `res.ok` before treating it as success — a 404 becomes a visible red message instead of a silent no-op.
- Errors from `create`, `toggle`, and `delete` all surface in the same place at the top of the page, so students can see immediately when something failed and why.

---

## Run it

```bash
# 1. Start MongoDB (skip if using Atlas)
docker run -d -p 27017:27017 --name mongo-tasks mongo:7

# 2. Install dependencies
npm install

# 3. Run the app
npm run dev
```

Visit:
- `http://localhost:3000` — home page
- `http://localhost:3000/tasks` — list, create, toggle, delete (now persisted in MongoDB)
- `http://localhost:3000/tasks/new` — dedicated create page
- `http://localhost:3000/api/tasks` — raw JSON API

Verify persistence directly:
```bash
curl -X POST http://localhost:3000/api/tasks \
  -H "Content-Type: application/json" \
  -d '{"title": "Test MongoDB connection"}'

curl http://localhost:3000/api/tasks
```

Restart the dev server (`Ctrl+C`, then `npm run dev` again) and reload `/tasks` — the
task is still there. That's the difference from the in-memory version, where a restart
wiped everything. Make this the "aha" moment for students.