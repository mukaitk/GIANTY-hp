"use client"

export const Button = ({
  type,
  className,
  children,
  ...props
}: { type?: "submit" | "button"; className?: string; children: React.ReactNode; [x: string]: any }) => {
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

export const Textarea = ({ className, ...props }: { className?: string; [x: string]: any }) => {
  return (
    <textarea
      className={`block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6 ${className}`}
      {...props}
    />
  )
}

