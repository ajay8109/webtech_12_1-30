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
