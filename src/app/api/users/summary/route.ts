import prisma from "@/lib/db";
import { getSummary } from "@/utils/get-summary";
import { NextRequest, NextResponse } from "next/server";

type UserSummary = {
  id: number;
  name: string;
  email: string;
  totalMeals: number;
  totalMarketExpenses: number;
  balance: number;
};

export async function GET(request: NextRequest) {
  const users = await prisma.user.findMany({
    include: {
      meals: {
        select: { count: true },
      },
      marketCoast: {
        select: { totalCoast: true },
      },
    },
  });
  const { mealRate } = await getSummary();
  const userSummary: UserSummary[] = users.map((user) => {
    const totalMeals = user.meals.reduce((sum, meal) => sum + meal.count, 0);
    const totalMarketExpenses = user.marketCoast.reduce(
      (sum, market) => sum + market.totalCoast,
      0
    );

    const balance = totalMarketExpenses - totalMeals * mealRate;
    return {
      id: user.id,
      name: user.name,
      email: user.email,
      totalMeals,
      totalMarketExpenses,
      balance,
    };
  });
  userSummary.sort((a, b) => b.balance - a.balance);

  return NextResponse.json(userSummary);
}
