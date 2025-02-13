"use client"

import { useEffect, useRef } from "react"
import type React from "react" // Added import for React

interface ScrollAnimationProps {
  children: React.ReactNode
  className?: string
}

export function ScrollAnimation({ children, className = "" }: ScrollAnimationProps) {
  const elementRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate")
          }
        })
      },
      {
        threshold: 0.1,
      },
    )

    if (elementRef.current) {
      observer.observe(elementRef.current)
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current)
      }
    }
  }, [])

  return (
    <div ref={elementRef} className={`scroll-animation ${className}`}>
      {children}
    </div>
  )
}

