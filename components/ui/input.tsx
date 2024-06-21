import * as React from "react"
import { cn } from "@/lib/utils"

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(({ className, type, ...props }, ref) => {
  return (
    <input
      type={type}
      className={cn(
        "flex h-12 w-full rounded-lg border border-transparent bg-white px-4 py-3 text-sm text-gray-700 ring-1 ring-gray-300 transition-all duration-300 ease-in-out focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 focus:outline-none focus:shadow-lg hover:ring-2 hover:ring-offset-2 hover:ring-blue-300 placeholder:text-gray-400 disabled:cursor-not-allowed disabled:opacity-50",
        "bg-gradient-to-r from-gray-50 to-white dark:from-gray-800 dark:to-gray-900",
        "shadow-md hover:shadow-lg focus:shadow-xl",
        "transform-gpu hover:scale-105 focus:scale-105",
        className
      )}
      ref={ref}
      {...props}
    />
  )
})
Input.displayName = "Input"

export { Input }
