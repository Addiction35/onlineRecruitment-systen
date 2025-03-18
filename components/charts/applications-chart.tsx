"use client"

import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

// Sample data - in a real app, this would come from an API
const applicationData = [
  { month: "Jan", applications: 45, interviews: 12, hires: 3 },
  { month: "Feb", applications: 52, interviews: 15, hires: 4 },
  { month: "Mar", applications: 61, interviews: 18, hires: 5 },
  { month: "Apr", applications: 67, interviews: 22, hires: 6 },
  { month: "May", applications: 55, interviews: 19, hires: 4 },
  { month: "Jun", applications: 48, interviews: 16, hires: 3 },
  { month: "Jul", applications: 65, interviews: 21, hires: 5 },
  { month: "Aug", applications: 72, interviews: 24, hires: 7 },
  { month: "Sep", applications: 78, interviews: 26, hires: 8 },
  { month: "Oct", applications: 84, interviews: 28, hires: 9 },
  { month: "Nov", applications: 69, interviews: 23, hires: 6 },
  { month: "Dec", applications: 58, interviews: 19, hires: 5 },
]

export function ApplicationsChart() {
  return (
    <Card className="border-blue-100 dark:border-blue-800">
      <CardHeader className="pb-2">
        <CardTitle>Applications Overview</CardTitle>
        <CardDescription>Monthly applications, interviews, and hires</CardDescription>
      </CardHeader>
      <CardContent className="h-[400px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={applicationData} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip
              contentStyle={{
                backgroundColor: "#fff",
                borderRadius: "8px",
                border: "1px solid #e2e8f0",
                boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
              }}
            />
            <Legend />
            <Bar dataKey="applications" name="Applications" fill="#3b82f6" radius={[4, 4, 0, 0]} />
            <Bar dataKey="interviews" name="Interviews" fill="#0ea5e9" radius={[4, 4, 0, 0]} />
            <Bar dataKey="hires" name="Hires" fill="#06b6d4" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}

