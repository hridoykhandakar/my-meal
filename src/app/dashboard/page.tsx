import { Metadata } from "next";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CreditCard, ShoppingCart, UtensilsCrossed } from "lucide-react";
import { MemberDetails } from "./member-details";
import { MealRateAnalysis } from "./meal-rate-analysis";
import { MarketCostManagement } from "./market-cost-management";
import { MealManagement } from "./meal-management";
import { currentUser } from "./lib/data";
import { ExpenseHistory } from "./expense-history";
import { ExpenseTrend } from "./expense-trend";
import { Balance } from "./components/balance";
import { UserMealHistory } from "./user-meal-history";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Meal Management System Dashboard",
};
type summary = {
  totalMeal: number;
  totalMarketExpenses: number;
  mealRate: number;
};

export default async function DashboardPage() {
  const res = await fetch("http://localhost:3000/api/summary");
  const data: summary = await res.json();

  return (
    <>
      <div className="flex-col md:flex">
        <div className="flex-1 space-y-4 p-8 pt-6">
          <div className="flex items-center justify-between space-y-2">
            <h2 className="text-3xl font-bold tracking-tight">
              Welcome, {currentUser.name}
            </h2>
          </div>
          <Tabs defaultValue="overview" className="space-y-4">
            <TabsList>
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="analytics">Analytics</TabsTrigger>
              <TabsTrigger value="management">Management</TabsTrigger>
              <TabsTrigger value="members">All Members</TabsTrigger>
            </TabsList>
            <TabsContent value="overview" className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">
                      Meal Rate
                    </CardTitle>
                    <CreditCard className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <Balance balance={data.mealRate} />
                    <p className="text-xs text-muted-foreground">
                      Meal Rate of this Month
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">
                      Total Meals Consumed
                    </CardTitle>
                    <UtensilsCrossed className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">{data.totalMeal}</div>
                    <p className="text-xs text-muted-foreground">
                      Total Meals this Month
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">
                      Total Market Expenses
                    </CardTitle>
                    <ShoppingCart className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">
                      ${data.totalMarketExpenses}
                    </div>
                    <p className="text-xs text-muted-foreground">
                      total market expenses
                    </p>
                  </CardContent>
                </Card>
              </div>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-8">
                <Card className="col-span-4">
                  <ExpenseHistory />
                </Card>
                <Card className="col-span-4">
                  <UserMealHistory meals={currentUser.recentMeals} />
                </Card>
              </div>
            </TabsContent>
            <TabsContent value="analytics" className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <MealRateAnalysis />
                <ExpenseTrend />
              </div>
            </TabsContent>
            <TabsContent value="management" className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <MarketCostManagement />
                <MealManagement />
              </div>
            </TabsContent>
            <TabsContent value="members" className="space-y-4">
              <MemberDetails />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </>
  );
}
