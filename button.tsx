import type React from "react"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
  children: React.ReactNode
}

export function Button({ type, className, children, ...props }: ButtonProps) {
  return (
    <button
      type={type || "button"}
      className={`inline-flex items-center justify-center rounded-md px-3 py-2 text-sm font-semibold text-white ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}

