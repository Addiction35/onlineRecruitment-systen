"use client"

import { Cell, Legend, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

// Sample data - in a real app, this would come from an API
const sourceData = [
  { name: "Job Board", value: 45, color: "#3b82f6" }, // Blue
  { name: "Company Website", value: 25, color: "#0ea5e9" }, // Light blue
  { name: "Referrals", value: 15, color: "#06b6d4" }, // Cyan
  { name: "Social Media", value: 10, color: "#14b8a6" }, // Teal
  { name: "Other", value: 5, color: "#f59e0b" }, // Amber (complementary)
]

export function SourceChart() {
  return (
    <Card className="border-blue-100 dark:border-blue-800">
      <CardHeader className="pb-2">
        <CardTitle>Application Sources</CardTitle>
        <CardDescription>Where your applicants are coming from</CardDescription>
      </CardHeader>
      <CardContent className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={sourceData}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={100}
              paddingAngle={2}
              dataKey="value"
              label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
              labelLine={false}
            >
              {sourceData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip
              formatter={(value) => [`${value} applications`, "Count"]}
              contentStyle={{
                backgroundColor: "#fff",
                borderRadius: "8px",
                border: "1px solid #e2e8f0",
                boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
              }}
            />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}

