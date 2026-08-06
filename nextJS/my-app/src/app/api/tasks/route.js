// app/api/tasks/route.js
import { taskService } from "@/services/taskService";
import { NextResponse } from "next/server";

// GET /api/tasks — list all tasks
export async function GET() {
  try {
    const tasks = await taskService.getAll();
    return NextResponse.json(tasks);
  } catch (error) {
    console.error("GET /api/tasks error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

// POST /api/tasks — create a new task
export async function POST(request) {
  try {
    const body = await request.json();
    console.log("POST /api/tasks body:", body);

    if (!body.title || typeof body.title !== "string") {
      return NextResponse.json({ error: "title is required" }, { status: 400 });
    }

    const task = await taskService.create(body);
    console.log("POST /api/tasks success:", task);
    return NextResponse.json(task, { status: 201 });
  } catch (error) {
    console.error("POST /api/tasks error:", error);
    console.error("Error stack:", error.stack);
    return NextResponse.json({ error: error.message, stack: error.stack }, { status: 500 });
  }
}
