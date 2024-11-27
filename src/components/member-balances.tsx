"use client";

import {
  Bar,
  BarChart,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const data = [
  {
    name: "John",
    balance: 120,
  },
  {
    name: "Jane",
    balance: -45,
  },
  {
    name: "Bob",
    balance: 80,
  },
  {
    name: "Alice",
    balance: -30,
  },
  {
    name: "Charlie",
    balance: 200,
  },
];

export function MemberBalances() {
  // Function to determine the fill color based on the balance
  // const getFillColor = (balance: number) => {
  //   return balance >= 0 ? "green" : "red";
  // };
  return (
    <ResponsiveContainer width="100%" height={350}>
      <BarChart data={data}>
        <XAxis dataKey="name" />
        <YAxis tickFormatter={(value) => `$${value}`} />
        <Tooltip />
        <Legend />
        <Bar
          dataKey="balance"
          fill="currentColor"
          radius={[4, 4, 0, 0]}
          className="fill-primary"
        />
        {/* 
        <Bar
          dataKey="balance"
          radius={[4, 4, 0, 0]}
          shape={({
            x,
            y,
            width,
            height,
            value,
          }: {
            x: number;
            y: number;
            width: number;
            height: number;
            value: number;
          }) => (
            <Rectangle
              x={x}
              y={y}
              width={width}
              height={height}
              fill={getFillColor(value)} // Use the function to get the color
            />
          )}
        /> */}
      </BarChart>
    </ResponsiveContainer>
  );
}
