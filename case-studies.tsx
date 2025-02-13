"use client"

import Image from "next/image"
import { ScrollAnimation } from "./scroll-animation"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { useState, useEffect } from "react"
import React from "react"

const farmiImages = [
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_2314-xVuZBvzo3T4My4fvIYsTvD9KjG9JnK.jpeg",
    alt: "FARMI店舗外観",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_2319-EZPF9oa9de2ZEii0BDMaOgh7vCZwco.jpeg",
    alt: "FARMIアプリのスクリーンショット",
  },
]

const fitImages = [
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_2321-uXQj3J8NpsetC8cgCxSBZEfFN5n0OZ.jpeg",
    alt: "25 FIT店舗外観",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_2324-2tD6eUcb9mXRFA1e3hu4Dei1bj0QgS.jpeg",
    alt: "25 FITスタッフ集合写真",
  },
]

const caseStudies = [
  {
    case: "CASE 1",
    title: "FARMI",
    subtitle: "飲食店及びデリバリーアプリ",
    description: [
      "ベトナム・ホーチミンにて飲食店の運営及び、日本の食材・日用品のデリバリーサービスを展開。",
      "飲食店では丼もの、麺類などの日本食メニューを提供。",
      "日本語で利用可能なデリバリーアプリは、多くのベトナム在住日本人から好評。",
    ],
    images: farmiImages,
  },
  {
    case: "CASE 2",
    title: "25 FIT",
    subtitle: "EMSフィットネス",
    description: [
      "ハノイとホーチミンを中心にEMSフィットネスを18店舗展開している現地企業を弊社仲介で某日系企業と共同でM&Aを実施。",
      "50歳以下の人口比率が高く、ベトナムは非常に将来性が高いマーケットで数年で100店舗の展開が目標。",
    ],
    images: fitImages,
  },
]

function ImageTransition({ images }: { images: { src: string; alt: string }[] }) {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((current) => (current + 1) % images.length)
    }, 4000)

    return () => clearInterval(timer)
  }, [images.length])

  return (
    <div className="relative w-full h-full">
      {images.map((image, index) => (
        <div
          key={image.src}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={image.src || "/placeholder.svg"}
            alt={image.alt}
            fill
            className="object-cover"
            priority={index === 0}
          />
        </div>
      ))}
    </div>
  )
}

function NavigationControls({
  currentSlide,
  totalSlides,
  onPrevClick,
  onNextClick,
}: {
  currentSlide: number
  totalSlides: number
  onPrevClick: () => void
  onNextClick: () => void
}) {
  return (
    <div className="absolute top-8 left-8 z-20 flex items-center gap-8">
      <div className="flex items-center gap-2">
        {Array.from({ length: totalSlides }).map((_, index) => (
          <div
            key={index}
            className={`w-12 h-1 rounded-sm transition-colors ${index === currentSlide ? "bg-primary" : "bg-gray-200"}`}
          />
        ))}
      </div>
      <div className="flex items-center gap-4">
        <button
          onClick={onPrevClick}
          className="text-primary hover:text-primary/80 transition-colors"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-8 h-8" />
        </button>
        <button
          onClick={onNextClick}
          className="text-primary hover:text-primary/80 transition-colors"
          aria-label="Next slide"
        >
          <ChevronRight className="w-8 h-8" />
        </button>
      </div>
    </div>
  )
}

export function CaseStudies() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const sliderRef = React.useRef<Slider>(null)

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    beforeChange: (_: number, next: number) => setCurrentSlide(next),
  }

  const handlePrevClick = () => {
    sliderRef.current?.slickPrev()
  }

  const handleNextClick = () => {
    sliderRef.current?.slickNext()
  }

  return (
    <div className="bg-white" id="case-studies">
      <div className="container mx-auto mb-16 px-6">
        <ScrollAnimation>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-gray-900 pt-24">
            ベトナム進出事例紹介
          </h2>
        </ScrollAnimation>
      </div>

      <ScrollAnimation>
        <div className="relative">
          <NavigationControls
            currentSlide={currentSlide}
            totalSlides={caseStudies.length}
            onPrevClick={handlePrevClick}
            onNextClick={handleNextClick}
          />
          <Slider ref={sliderRef} {...settings}>
            {caseStudies.map((study, index) => (
              <div key={index}>
                <div className="grid grid-cols-1 lg:grid-cols-2 items-stretch">
                  <div className="bg-gray-50 min-h-[600px] flex items-center">
                    <div className="max-w-3xl w-full mx-auto px-6 lg:px-16 xl:px-24 py-16">
                      <div className="space-y-8">
                        <div>
                          <h3 className="text-xl font-bold text-primary mb-4">{study.case}</h3>
                          <h4 className="text-4xl lg:text-5xl font-bold text-secondary mb-4">{study.title}</h4>
                          <p className="text-xl lg:text-2xl font-bold text-secondary">{study.subtitle}</p>
                        </div>
                        <div className="w-16 h-1 bg-primary"></div>
                        <div className="text-gray-600 space-y-6 text-lg lg:text-xl leading-relaxed">
                          {study.description.map((paragraph, i) => (
                            <p key={i}>{paragraph}</p>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="relative h-[400px] lg:h-auto min-h-[600px]">
                    <ImageTransition images={study.images} />
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </ScrollAnimation>
    </div>
  )
}

