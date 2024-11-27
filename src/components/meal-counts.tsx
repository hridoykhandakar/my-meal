"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts";

const data = [
  {
    name: "Week 1",
    day: 65,
    night: 45,
  },
  {
    name: "Week 2",
    day: 70,
    night: 50,
  },
  {
    name: "Week 3",
    day: 68,
    night: 48,
  },
  {
    name: "Week 4",
    day: 72,
    night: 52,
  },
];

export function MealCounts() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Meal Counts</CardTitle>
        <CardDescription>
          Day and night meal counts for the current month
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={350}>
          <BarChart data={data}>
            <XAxis
              dataKey="name"
              stroke="#888888"
              fontSize={12}
              tickLine={false}
              axisLine={false}
            />
            <YAxis
              stroke="#888888"
              fontSize={12}
              tickLine={false}
              axisLine={false}
              tickFormatter={(value) => `${value}`}
            />
            <Bar
              dataKey="day"
              name="Day Meals"
              fill="#adfa1d"
              radius={[4, 4, 0, 0]}
            />
            <Bar
              dataKey="night"
              name="Night Meals"
              fill="#0ea5e9"
              radius={[4, 4, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
