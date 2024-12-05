import { NextRequest, NextResponse } from "next/server";
import productSchema from "./schema";

// export function GET(request: NextRequest) {
//   return NextResponse.json([
//     { name: "Milk", price: 2.5 },
//     { name: "Bread", price: 3.5 },
//   ]);
// }

export async function POST(request: NextRequest) {
  const body = await request.json();
  const validation = productSchema.safeParse(body);
  if (!validation.success)
    return NextResponse.json({ error: validation.error }, { status: 400 });
  return NextResponse.json(validation.data, { status: 200 });
}
