import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CalendarDays, DollarSign, Users, UtensilsCrossed } from "lucide-react";
import { Metadata } from "next";
import { MarketCostManagement } from "@/components/market-cost-management";
import { MealCounts } from "@/components/meal-counts";
import { MealManagement } from "@/components/meal-management";
import { MealRateAnalysis } from "@/components/meal-rate-analysis";
import { MemberBalances } from "@/components/member-balances";
import { MemberDetails } from "@/components/member-details";
import { RecentMarketExpenses } from "@/components/recent-market-expenses";

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
            <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
          </div>
          <Tabs defaultValue="overview" className="space-y-4">
            <TabsList>
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="analytics">Analytics</TabsTrigger>
              <TabsTrigger value="management">Management</TabsTrigger>
              <TabsTrigger value="members">Members</TabsTrigger>
            </TabsList>
            <TabsContent value="overview" className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">
                      Total Market Costs
                    </CardTitle>
                    <DollarSign className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">$1,234.56</div>
                    <p className="text-xs text-muted-foreground">
                      +20.1% from last month
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
                    <div className="text-2xl font-bold">345</div>
                    <p className="text-xs text-muted-foreground">
                      +10.5% from last month
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">
                      Current Meal Rate
                    </CardTitle>
                    <CalendarDays className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">$3.58</div>
                    <p className="text-xs text-muted-foreground">Per meal</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">
                      Active Members
                    </CardTitle>
                    <Users className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">5</div>
                    <p className="text-xs text-muted-foreground">
                      +1 guest this month
                    </p>
                  </CardContent>
                </Card>
              </div>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
                <Card className="col-span-4">
                  <CardHeader>
                    <CardTitle>Recent Market Expenses</CardTitle>
                  </CardHeader>
                  <CardContent className="pl-2">
                    <RecentMarketExpenses />
                  </CardContent>
                </Card>
                <Card className="col-span-3">
                  <CardHeader>
                    <CardTitle>Member Balances</CardTitle>
                    <CardDescription>
                      Current balance for each member
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <MemberBalances />
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            <TabsContent value="analytics" className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <MealCounts />
                <MealRateAnalysis />
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
