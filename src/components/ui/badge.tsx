import { cva, type VariantProps } from "class-variance-authority"

import * as React from "react"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex max-w-[150px] items-center rounded-[10px] p-2 border-2 border-border px-2.5 font-base py-0.5 transition-colors focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 h-[25px]",
  {
    variants: {
      variant: {
        default: "bg-black text-white shadow-color shadow-reverse-box-shadow-y",
        neutral: "bg-bw text-text",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants }
