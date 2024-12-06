import prisma from "@/lib/db";

export async function getSummary() {
  const totalMeal = await prisma.meal.aggregate({
    _sum: { count: true },
  });
  const totalMarketExpenses = await prisma.marketCoast.aggregate({
    _sum: { totalCoast: true },
  });
  const mealCount = totalMeal._sum.count ?? 0; // Default to 0 if null
  const totalCoast = totalMarketExpenses._sum.totalCoast ?? 0; // Default to 0 if null
  const mealRate = mealCount > 0 ? totalCoast / mealCount : 0; // Avoid division by zero

  return {
    mealRate,
    totalCoast,
    mealCount,
  };
}
