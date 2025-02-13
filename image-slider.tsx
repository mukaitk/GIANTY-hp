"use client"

import { useEffect, useState } from "react"
import Image from "next/image"

interface ImageSliderProps {
  images: {
    src: string
    alt: string
  }[]
  interval?: number
}

export function ImageSlider({ images, interval = 5000 }: ImageSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
    const timer = setInterval(() => {
      setCurrentIndex((current) => (current + 1) % images.length)
    }, interval)

    return () => clearInterval(timer)
  }, [images.length, interval])

  if (!isClient) {
    return null
  }

  return (
    <div className="relative h-full w-full">
      {images.map((image, index) => (
        <div
          key={image.src}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="relative h-full w-full">
            <Image
              src={image.src || "/placeholder.svg"}
              alt={image.alt}
              fill
              sizes="100vw"
              className="object-cover"
              priority={index === 0}
            />
          </div>
        </div>
      ))}
    </div>
  )
}

