"use client";

import { useState, useMemo } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts";

const members = [
  { id: "1", name: "John Doe" },
  { id: "2", name: "Jane Smith" },
  { id: "3", name: "Bob Johnson" },
  { id: "4", name: "Alice Brown" },
  { id: "5", name: "Charlie Davis" },
];

const memberData = {
  "1": {
    mealConsumption: [
      { week: "Week 1", day: 10, night: 7 },
      { week: "Week 2", day: 12, night: 8 },
      { week: "Week 3", day: 9, night: 6 },
      { week: "Week 4", day: 11, night: 7 },
    ],
    expenses: [
      { date: "2023-06-01", items: "Vegetables, Fruits", amount: 45.67 },
      { date: "2023-06-08", items: "Meat, Dairy", amount: 78.9 },
      { date: "2023-06-15", items: "Grains, Snacks", amount: 32.45 },
    ],
    balance: -25.5,
  },
  "2": {
    mealConsumption: [
      { week: "Week 1", day: 8, night: 6 },
      { week: "Week 2", day: 9, night: 7 },
      { week: "Week 3", day: 10, night: 8 },
      { week: "Week 4", day: 7, night: 5 },
    ],
    expenses: [
      { date: "2023-06-03", items: "Fruits, Dairy", amount: 55.2 },
      { date: "2023-06-10", items: "Vegetables, Snacks", amount: 42.3 },
      { date: "2023-06-17", items: "Meat, Grains", amount: 68.75 },
    ],
    balance: 15.8,
  },
  "3": {
    mealConsumption: [
      { week: "Week 1", day: 11, night: 9 },
      { week: "Week 2", day: 10, night: 8 },
      { week: "Week 3", day: 12, night: 10 },
      { week: "Week 4", day: 9, night: 7 },
    ],
    expenses: [
      { date: "2023-06-05", items: "Vegetables, Meat", amount: 72.4 },
      { date: "2023-06-12", items: "Fruits, Dairy", amount: 48.9 },
      { date: "2023-06-19", items: "Snacks, Grains", amount: 35.6 },
    ],
    balance: -5.3,
  },
  "4": {
    mealConsumption: [
      { week: "Week 1", day: 9, night: 7 },
      { week: "Week 2", day: 11, night: 9 },
      { week: "Week 3", day: 8, night: 6 },
      { week: "Week 4", day: 10, night: 8 },
    ],
    expenses: [
      { date: "2023-06-02", items: "Dairy, Snacks", amount: 38.5 },
      { date: "2023-06-09", items: "Vegetables, Fruits", amount: 62.7 },
      { date: "2023-06-16", items: "Meat, Grains", amount: 85.3 },
    ],
    balance: 10.2,
  },
  "5": {
    mealConsumption: [
      { week: "Week 1", day: 10, night: 8 },
      { week: "Week 2", day: 9, night: 7 },
      { week: "Week 3", day: 11, night: 9 },
      { week: "Week 4", day: 8, night: 6 },
    ],
    expenses: [
      { date: "2023-06-04", items: "Fruits, Vegetables", amount: 58.9 },
      { date: "2023-06-11", items: "Meat, Dairy", amount: 76.4 },
      { date: "2023-06-18", items: "Grains, Snacks", amount: 41.2 },
    ],
    balance: -8.7,
  },
};

export function MemberDetails() {
  const [selectedMember, setSelectedMember] = useState("1");

  const data = memberData[selectedMember as keyof typeof memberData];

  const summary = useMemo(() => {
    if (!data) return null;

    const totalMeals = data.mealConsumption.reduce(
      (sum, week) => sum + week.day + week.night,
      0
    );
    const totalMarketExpenses = data.expenses.reduce(
      (sum, expense) => sum + expense.amount,
      0
    );

    return {
      balance: data.balance,
      totalMeals,
      totalMarketExpenses,
    };
  }, [data]);

  if (!data || !summary) {
    return (
      <Card className="col-span-3">
        <CardHeader>
          <CardTitle>Member Details</CardTitle>
          <CardDescription>
            View detailed information for each member
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p>No data available for the selected member.</p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="col-span-3">
      <CardHeader>
        <CardTitle>Member Details</CardTitle>
        <CardDescription>
          View detailed information for each member
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Select onValueChange={setSelectedMember} defaultValue={selectedMember}>
          <SelectTrigger className="w-[180px] mb-4">
            <SelectValue placeholder="Select a member" />
          </SelectTrigger>
          <SelectContent>
            {members.map((member) => (
              <SelectItem key={member.id} value={member.id}>
                {member.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <div className="grid gap-4 md:grid-cols-3 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Current Balance
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div
                className={`text-2xl font-bold ${
                  summary.balance < 0 ? "text-red-500" : "text-green-500"
                }`}
              >
                ${summary.balance.toFixed(2)}
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Total Meals Eaten
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{summary.totalMeals}</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Total Market Expenses
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                ${summary.totalMarketExpenses.toFixed(2)}
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Meal Consumption</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={200}>
                <BarChart data={data.mealConsumption}>
                  <XAxis dataKey="week" />
                  <YAxis />
                  <Bar dataKey="day" name="Day Meals" fill="#adfa1d" />
                  <Bar dataKey="night" name="Night Meals" fill="#0ea5e9" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Recent Expenses</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Date</TableHead>
                    <TableHead>Items</TableHead>
                    <TableHead className="text-right">Amount</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {data.expenses.map((expense, index) => (
                    <TableRow key={index}>
                      <TableCell>{expense.date}</TableCell>
                      <TableCell>{expense.items}</TableCell>
                      <TableCell className="text-right">
                        ${expense.amount.toFixed(2)}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>
      </CardContent>
    </Card>
  );
}
