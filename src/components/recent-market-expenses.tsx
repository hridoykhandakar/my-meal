"use client"

import { Button } from "@/components/ui/button"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

const recentExpenses = [
  {
    id: "EXP001",
    date: "2023-06-15",
    purchaser: "John Doe",
    items: "Vegetables, Fruits",
    amount: 45.67,
    status: "Approved",
  },
  {
    id: "EXP002",
    date: "2023-06-14",
    purchaser: "Jane Smith",
    items: "Meat, Dairy",
    amount: 78.90,
    status: "Pending",
  },
  {
    id: "EXP003",
    date: "2023-06-13",
    purchaser: "Bob Johnson",
    items: "Grains, Snacks",
    amount: 32.45,
    status: "Approved",
  },
  {
    id: "EXP004",
    date: "2023-06-12",
    purchaser: "Alice Brown",
    items: "Beverages",
    amount: 25.30,
    status: "Rejected",
  },
]

export function RecentMarketExpenses() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Date</TableHead>
          <TableHead>Purchaser</TableHead>
          <TableHead>Items</TableHead>
          <TableHead className="text-right">Amount</TableHead>
          <TableHead className="text-right">Status</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {recentExpenses.map((expense) => (
          <TableRow key={expense.id}>
            <TableCell className="font-medium">{expense.date}</TableCell>
            <TableCell>{expense.purchaser}</TableCell>
            <TableCell>{expense.items}</TableCell>
            <TableCell className="text-right">${expense.amount.toFixed(2)}</TableCell>
            <TableCell className="text-right">
              <Button
                variant={expense.status === "Approved" ? "outline" : expense.status === "Pending" ? "secondary" : "destructive"}
                size="sm"
              >
                {expense.status}
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

