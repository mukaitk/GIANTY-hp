import { ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { ScrollAnimation } from "./scroll-animation"
import type React from "react" // Added import for React

export function Hero() {
  const FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLSehg20rI5rhuh_GJGF0vHPECO3jUPTmLbpR30f9I056CZd_Xg/viewform"

  const handleServiceClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    const element = document.querySelector("#service")
    if (element) {
      const headerOffset = 80
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      })
    }
  }

  return (
    <div className="relative h-[85vh]">
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_2287-Js2C8TGhsrwbGZS8CjNJRXBf9bkykb.jpeg"
          alt="Ho Chi Minh City skyline"
          fill
          className="object-cover object-center object-[50%_70%] brightness-[0.8] contrast-[1.05]"
          priority
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/40 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex items-center h-full pt-20">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 w-full">
          <ScrollAnimation>
            <div className="max-w-3xl">
              <div className="flex items-start gap-4">
                <div className="w-1 bg-primary flex-shrink-0 self-stretch">
                  <div
                    className="h-full transform transition-all duration-1000 origin-bottom"
                    style={{ animation: "growHeight 1.2s ease-out forwards" }}
                  ></div>
                </div>
                <div className="space-y-2">
                  <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white leading-tight">
                    ベトナムオフショア
                  </h1>
                  <p className="text-xl sm:text-2xl md:text-3xl font-medium tracking-wide text-white">
                    20年の実績と信頼
                  </p>
                  <p className="text-lg sm:text-xl md:text-2xl font-light tracking-wide text-white">
                    ベトナム進出支援サービス
                  </p>
                </div>
              </div>
              <div className="mt-8 flex flex-col sm:flex-row items-start gap-4 sm:gap-6 pl-5">
                <Link
                  href={FORM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-center gap-2 bg-white hover:bg-white/90 px-8 py-4 text-lg font-medium text-gray-900 transition-colors tracking-wide w-full sm:w-auto"
                >
                  お問い合わせ
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link
                  href="#service"
                  onClick={handleServiceClick}
                  className="group inline-flex items-center justify-center gap-2 bg-transparent hover:bg-white/10 border-2 border-white px-8 py-4 text-lg font-medium text-white transition-colors tracking-wide w-full sm:w-auto"
                >
                  サービス一覧
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </div>
  )
}

