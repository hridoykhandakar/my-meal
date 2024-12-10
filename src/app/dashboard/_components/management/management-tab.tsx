import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MarketCostManagement } from "./market-cost-management";
import { MealManagement } from "./meal-management";

export function ManagementTab() {
  return (
    <Tabs defaultValue="account" className="min-w-fit max-h-fit">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="meal">Update Meal</TabsTrigger>
        <TabsTrigger value="market">Update Market</TabsTrigger>
      </TabsList>
      <TabsContent value="meal">
        <MealManagement />
      </TabsContent>
      <TabsContent value="market">
        <MarketCostManagement />
      </TabsContent>
    </Tabs>
  );
}
