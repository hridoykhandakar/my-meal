import { Metadata } from "next";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CreditCard, ShoppingCart, UtensilsCrossed, Users } from "lucide-react";
import { MemberDetails } from "./member-details";
import { MealRateAnalysis } from "./meal-rate-analysis";
import { MarketCostManagement } from "./market-cost-management";
import { MealManagement } from "./meal-management";
import { currentUser } from "./lib/data";
import { UserMealHistory } from "./user-meal-history";
import { UserExpenseHistory } from "./user-expense-history";
import { ExpenseTrend } from "./expense-trend";
import { Balance } from "./components/balance";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Meal Management System Dashboard",
};

export default function DashboardPage() {
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
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">
                      Current Balance
                    </CardTitle>
                    <CreditCard className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <Balance balance={currentUser.balance} />
                    <p className="text-xs text-muted-foreground">
                      Your current account balance
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
                    <div className="text-2xl font-bold">
                      {currentUser.totalMealsConsumed}
                    </div>
                    <p className="text-xs text-muted-foreground">
                      Your total meals this month
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
                      ${currentUser.totalMarketExpenses.toFixed(2)}
                    </div>
                    <p className="text-xs text-muted-foreground">
                      Your total market expenses
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Role</CardTitle>
                    <Users className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">{currentUser.role}</div>
                    <p className="text-xs text-muted-foreground">
                      Your role in the system
                    </p>
                  </CardContent>
                </Card>
              </div>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
                <Card className="col-span-4">
                  <UserMealHistory meals={currentUser.recentMeals} />
                </Card>
                <Card className="col-span-3">
                  <UserExpenseHistory expenses={currentUser.recentExpenses} />
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
