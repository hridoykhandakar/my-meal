import prisma from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const totalMeal = await prisma.meal.aggregate({
    _sum: { count: true },
  });
  // total market coast
  const totalMarketExpenses = await prisma.marketCoast.aggregate({
    _sum: { totalCoast: true },
  });
  // Calculate Meal rate
  const mealCount = totalMeal._sum.count ?? 0; // Default to 0 if null
  const totalCoast = totalMarketExpenses._sum.totalCoast ?? 0; // Default to 0 if null

  const mealRate = mealCount > 0 ? totalCoast / mealCount : 0; // Avoid division by zero

  return NextResponse.json(
    {
      totalMeal: totalMeal._sum.count,
      totalMarketExpenses: totalMarketExpenses._sum.totalCoast,
      mealRate,
    },
    { status: 200 }
  );
}
