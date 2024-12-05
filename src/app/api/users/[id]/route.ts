import { NextRequest, NextResponse } from "next/server";
import schema from "../schema";
export function GET(
  request: NextRequest,
  { params }: { params: { id: number } }
) {
  if (params.id > 10)
    return NextResponse.json({ error: "not found" }, { status: 404 });
  return NextResponse.json({ id: 1, name: "john" });
}

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: number } }
) {
  const body = await request.json();
  const validation = schema.safeParse(body);
  if (params.id > 10) {
    return NextResponse.json({ error: "user not found" }, { status: 404 });
  }
  return NextResponse.json(validation, { status: 200 });
}
