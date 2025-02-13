import Image from "next/image"
import { ScrollAnimation } from "./scroll-animation"

export function About() {
  const clients = [
    {
      name: "DeNA",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_2290-7LsKpORxhHYsI2s7hYvuBo6nKWPEno.jpeg",
    },
  ]

  return (
    <div className="py-24 sm:py-32" id="about">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <ScrollAnimation>
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-3xl font-bold leading-tight text-primary mb-8">About</h2>
            <p className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">ベトナムオフショア20年の実績</p>
            <p className="mt-8 text-lg leading-8 text-gray-600 whitespace-pre-line">
              ベトナムオフショアのパイオニア企業として、 2001年8月の設立以来、これまで300社を超える
              日本企業様向けにソフトウエア開発など さまざまなサービスをご利用いただいております。
            </p>
          </div>
        </ScrollAnimation>

        <ScrollAnimation>
          <div className="mx-auto mt-20 max-w-7xl px-6 md:mt-24">
            <div className="relative">
              <div className="mx-auto max-w-6xl">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_2290-7LsKpORxhHYsI2s7hYvuBo6nKWPEno.jpeg"
                  alt="Client Logos including DeNA, JINS, SQUARE ENIX, and more"
                  width={1200}
                  height={400}
                  className="w-full"
                />
              </div>
              {/* Gradient overlays */}
              <div className="absolute pointer-events-none inset-0 flex">
                <div className="w-1/12 bg-gradient-to-r from-white" />
                <div className="w-10/12" />
                <div className="w-1/12 bg-gradient-to-l from-white" />
              </div>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </div>
  )
}

