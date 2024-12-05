import { NextRequest, NextResponse } from "next/server";
import productSchema from "../schema";

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: number } }
) {
  const body = await request.json();
  const validation = productSchema.safeParse(body);
  if (!validation.success)
    return NextResponse.json({ error: "product not Found" }, { status: 404 });
  if (params.id > 10) {
    return NextResponse.json({ error: "product not Found" }, { status: 404 });
  }
}
export async function PUT(
  request: NextRequest,
  { params }: { params: { id: number } }
) {
  const body = await request.json();
  const validation = productSchema.safeParse(body);
  if (!validation.success)
    return NextResponse.json({ error: "product not Found" }, { status: 404 });
  if (params.id > 10) {
    return NextResponse.json({ error: "product not Found" }, { status: 404 });
  }
  return NextResponse.json(validation.data, { status: 200 });
}
