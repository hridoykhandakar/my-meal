import { NextRequest, NextResponse } from "next/server";
import todoSchema from "./todoSchema";
import prisma from "@/lib/db";

export async function GET(request: NextRequest) {
  const todo = await prisma.todo.findMany();
  return NextResponse.json(todo, { status: 201 });
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  const validation = todoSchema.safeParse(body);
  if (!validation.data)
    return NextResponse.json(validation.error.errors, { status: 404 });

  const todo = await prisma.todo.create({
    data: {
      title: body.title,
    },
  });
  // const todo = await prisma.todo.create({
  //   data: {
  //     title: body.title,
  //   },
  // });
  return NextResponse.json(todo, { status: 201 });
}
