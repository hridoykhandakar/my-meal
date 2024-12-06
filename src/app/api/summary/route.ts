import { NextRequest, NextResponse } from "next/server";
import { getSummary } from "@/utils/get-summary";

export async function GET(request: NextRequest) {
  const { mealCount, mealRate, totalCoast } = await getSummary(); // Avoid division by zero

  return NextResponse.json(
    {
      totalMeal: mealCount,
      totalMarketExpenses: totalCoast,
      mealRate,
    },
    { status: 200 }
  );
}
