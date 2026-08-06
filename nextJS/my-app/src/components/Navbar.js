// components/Navbar.js
"use client";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav style={{ 
      padding: "1rem 2rem", 
      backgroundColor: "#fff", 
      borderBottom: "1px solid #e0e0e0",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center"
    }}>
      <Link href="/" style={{ fontSize: "1.5rem", fontWeight: "bold", textDecoration: "none" }}>
        Tasks App
      </Link>
      <div style={{ display: "flex", gap: "1rem" }}>
        <Link href="/tasks" style={{ textDecoration: "none" }}>Tasks</Link>
        <Link href="/tasks/new" style={{ textDecoration: "none" }}>New Task</Link>
      </div>
    </nav>
  );
}
