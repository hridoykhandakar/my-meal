import { NextRequest, NextResponse } from "next/server";
import todoSchema from "../todoSchema";
import prisma from "@/lib/db";

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const body = await request.json();
  const validation = todoSchema.safeParse(body);
  if (!validation.success)
    return NextResponse.json(validation.error.errors, { status: 400 });
  const todo = await prisma.todo.findUnique({
    where: { id: params.id },
  });
  if (!todo)
    return NextResponse.json({ error: "todo not found" }, { status: 404 });
  const { title, isCompleted } = validation.data;
  const updatedTodo = await prisma.todo.update({
    where: { id: todo.id },
    data: {
      ...(title !== undefined && { title }),
      ...(isCompleted !== undefined && { isCompleted }),
    },
  });
  return NextResponse.json(updatedTodo);
}
export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const todo = await prisma.todo.delete({
    where: { id: params.id },
  });
  if (!todo) return NextResponse.json({ error: "not found" }, { status: 404 });
  return NextResponse.json({});
}
export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const todo = await prisma.todo.findUnique({
    where: { id: params.id },
  });
  if (!todo) return NextResponse.json({ error: "not found" }, { status: 404 });
  return NextResponse.json(todo);
}
