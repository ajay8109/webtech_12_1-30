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
