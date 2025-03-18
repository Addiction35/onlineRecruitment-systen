"use client"

import * as React from "react"
import type { TooltipProps } from "recharts"
import type { NameType, ValueType } from "recharts/types/component/DefaultTooltipContent"

interface ChartConfig {
  [key: string]: {
    label: string
    color: string
  }
}

interface ChartContextValue {
  config: ChartConfig
}

const ChartContext = React.createContext<ChartContextValue | undefined>(undefined)

export function ChartContainer({
  children,
  config,
}: {
  children: React.ReactNode
  config: ChartConfig
}) {
  return (
    <ChartContext.Provider value={{ config }}>
      <div
        style={
          {
            "--color-applications": "#3b82f6",
            "--color-interviews": "#0ea5e9",
            "--color-hires": "#06b6d4",
            "--color-rate": "#3b82f6",
          } as React.CSSProperties
        }
      >
        {children}
      </div>
    </ChartContext.Provider>
  )
}

export function ChartTooltip({ active, payload, label, content, ...props }: TooltipProps<ValueType, NameType>) {
  if (!active || !payload?.length) {
    return null
  }

  return content ? (
    content
  ) : (
    <div className="rounded-lg border bg-background p-2 shadow-sm">
      <div className="grid grid-flow-col gap-2">
        <div className="font-medium">{label}</div>
      </div>
      <div className="mt-1 grid gap-0.5">
        {payload.map((item, i) => (
          <div key={i} className="grid grid-flow-col items-center gap-2">
            <div className="h-2 w-2 rounded-full" style={{ background: item.color }} />
            <div className="font-medium tabular-nums">{item.value}</div>
            <div className="text-muted-foreground">{item.name}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export function ChartTooltipContent({ active, payload, label }: TooltipProps<ValueType, NameType>) {
  const context = React.useContext(ChartContext)

  if (!active || !payload?.length || !context) {
    return null
  }

  return (
    <div className="rounded-lg border bg-background p-2 shadow-sm">
      <div className="grid grid-flow-col gap-2">
        <div className="font-medium">{label}</div>
      </div>
      <div className="mt-1 grid gap-0.5">
        {payload.map((item, i) => {
          const dataKey = item.dataKey as string
          const config = context.config[dataKey]

          if (!config) {
            return null
          }

          return (
            <div key={i} className="grid grid-flow-col items-center gap-2">
              <div className="h-2 w-2 rounded-full" style={{ background: config.color }} />
              <div className="font-medium tabular-nums">{item.value}</div>
              <div className="text-muted-foreground">{config.label}</div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

