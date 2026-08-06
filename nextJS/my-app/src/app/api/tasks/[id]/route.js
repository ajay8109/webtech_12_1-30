// app/api/tasks/[id]/route.js
import { taskService } from "@/services/taskService";
import { NextResponse } from "next/server";

// GET /api/tasks/:id — read one task
export async function GET(request, { params }) {
  const { id } = await params;
  const task = await taskService.getById(id);

  if (!task) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }
  return NextResponse.json(task);
}

// PUT /api/tasks/:id — update a task
export async function PUT(request, { params }) {
  const { id } = await params;
  const body = await request.json();
  const updated = await taskService.update(id, body);

  if (!updated) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }
  return NextResponse.json(updated);
}

// DELETE /api/tasks/:id — delete a task
export async function DELETE(request, { params }) {
    const { id } = await params;

    const ok = await taskService.remove(id);

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
