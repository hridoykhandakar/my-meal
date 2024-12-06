import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { User } from "lucide-react";
import { Balance } from "./_components/balance";

type UserSummary = {
  id: number;
  name: string;
  email: string;
  totalMeals: number;
  totalMarketExpenses: number;
  balance: number;
};

export async function UserSummary() {
  const res = await fetch("http://localhost:3000/api/users/summary");
  const data = await res.json();

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm text-muted-foreground font-medium">
          Recent Market
        </CardTitle>
        <User className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <p className="text-2xl font-bold mb-4">In the last 5 entries</p>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Total Meal</TableHead>
              <TableHead>Total Expenses</TableHead>
              <TableHead>Balance</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((user: UserSummary) => (
              <TableRow key={user.id}>
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.totalMeals}</TableCell>
                <TableCell>{user.totalMarketExpenses}</TableCell>
                <TableCell className="text-lg">
                  <Balance balance={user.balance} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
