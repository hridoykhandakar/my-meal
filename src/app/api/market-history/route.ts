import prisma from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const marketHistory = await prisma.marketCoast.findMany({
    include: {
      purchaser: {
        select: { id: true, name: true },
      },
    },
  });

  return NextResponse.json(marketHistory);
}
