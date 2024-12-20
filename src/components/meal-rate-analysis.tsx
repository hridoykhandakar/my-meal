"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { Line, LineChart, ResponsiveContainer, XAxis, YAxis } from "recharts"

const mealRateData = [
  { month: "Jan", rate: 3.25 },
  { month: "Feb", rate: 3.40 },
  { month: "Mar", rate: 3.35 },
  { month: "Apr", rate: 3.50 },
  { month: "May", rate: 3.45 },
  { month: "Jun", rate: 3.58 },
  { month: "Jul", rate: 3.62 },
  { month: "Aug", rate: 3.70 },
  { month: "Sep", rate: 3.65 },
  { month: "Oct", rate: 3.55 },
  { month: "Nov", rate: 3.60 },
  { month: "Dec", rate: 3.58 },
]

export function MealRateAnalysis() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Meal Rate Analysis</CardTitle>
        <CardDescription>Historical meal rate changes over the past year</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer
          config={{
            rate: {
              label: "Meal Rate",
              color: "hsl(var(--chart-1))",
            },
          }}
          className="h-[300px]"
        >
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={mealRateData}>
              <XAxis
                dataKey="month"
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
                tickFormatter={(value) => `$${value}`}
                domain={['auto', 'auto']}
              />
              <Line
                type="monotone"
                dataKey="rate"
                stroke="var(--color-rate)"
                strokeWidth={2}
                dot={false}
              />
              <ChartTooltip content={<ChartTooltipContent />} />
            </LineChart>
          </ResponsiveContainer>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}

