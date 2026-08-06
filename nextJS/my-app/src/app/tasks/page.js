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
