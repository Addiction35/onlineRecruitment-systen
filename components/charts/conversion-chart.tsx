"use client"

import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

// Sample data - in a real app, this would come from an API
const conversionData = [
  { month: "Jan", rate: 12 },
  { month: "Feb", rate: 14 },
  { month: "Mar", rate: 16 },
  { month: "Apr", rate: 18 },
  { month: "May", rate: 15 },
  { month: "Jun", rate: 13 },
  { month: "Jul", rate: 17 },
  { month: "Aug", rate: 19 },
  { month: "Sep", rate: 21 },
  { month: "Oct", rate: 22 },
  { month: "Nov", rate: 20 },
  { month: "Dec", rate: 18 },
]

export function ConversionChart() {
  return (
    <Card className="border-blue-100 dark:border-blue-800">
      <CardHeader className="pb-2">
        <CardTitle>Conversion Rate Trend</CardTitle>
        <CardDescription>Application to interview conversion rate (%)</CardDescription>
      </CardHeader>
      <CardContent className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={conversionData} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
            <defs>
              <linearGradient id="colorRate" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#3b82f6" stopOpacity={0.1} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
            <XAxis dataKey="month" />
            <YAxis domain={[0, 30]} />
            <Tooltip
              formatter={(value) => [`${value}%`, "Conversion Rate"]}
              contentStyle={{
                backgroundColor: "#fff",
                borderRadius: "8px",
                border: "1px solid #e2e8f0",
                boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
              }}
            />
            <Area type="monotone" dataKey="rate" stroke="#3b82f6" fillOpacity={1} fill="url(#colorRate)" />
          </AreaChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}

