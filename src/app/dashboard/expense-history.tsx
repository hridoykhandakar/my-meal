import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ShoppingCart } from "lucide-react";

interface Purchaser {
  id: number;
  name: string;
}

interface Market {
  id: string; // Assuming the ID is a UUID string
  purchaserId: number;
  date: string; // ISO 8601 date string
  totalCoast: number;
  items: string; // Comma-separated items
  createAt: string; // ISO 8601 date string
  updatedAt: string; // ISO 8601 date string
  purchaser: Purchaser; // Nested Purchaser object
}

export async function ExpenseHistory() {
  const res = await fetch("http://localhost:3000/api/market-history");
  const data = await res.json();

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm text-muted-foreground font-medium">
          Recent Market Expenses
        </CardTitle>
        <ShoppingCart className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <p className="text-2xl font-bold  mb-4">Last 5 Markets</p>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Date</TableHead>
              <TableHead>Amount</TableHead>
              <TableHead>Items</TableHead>
              <TableHead>User</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data?.map((expense: Market) => (
              <TableRow key={expense.id}>
                <TableCell>
                  {new Date(expense.date).toLocaleDateString()}
                </TableCell>
                <TableCell className="font-bold text-green-500">
                  ${expense.totalCoast}
                </TableCell>
                <TableCell>{expense.items}</TableCell>
                <TableCell>{expense.purchaser.name}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
