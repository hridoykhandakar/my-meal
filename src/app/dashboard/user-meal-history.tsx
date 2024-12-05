import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { UtensilsCrossed } from "lucide-react";

interface Meal {
  date: string;
  type: string;
  count: number;
}

interface UserMealHistoryProps {
  meals: Meal[];
}

export function UserMealHistory({ meals }: UserMealHistoryProps) {
  const totalMeals = meals.reduce((sum, meal) => sum + meal.count, 0);

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">Recent Market</CardTitle>
        <UtensilsCrossed className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{totalMeals} meals</div>
        <p className="text-xs text-muted-foreground mb-4">
          In the last 5 entries
        </p>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Date</TableHead>
              <TableHead>Items</TableHead>
              <TableHead>Coast</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {meals.map((meal, index) => (
              <TableRow key={index}>
                <TableCell>{meal.date}</TableCell>
                <TableCell>{meal.type}</TableCell>
                <TableCell>{meal.count}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
