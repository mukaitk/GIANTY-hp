"use client"

import { ScrollAnimation } from "./scroll-animation"
import { ImageSlider } from "./image-slider"
import Image from "next/image"

const services = [
  "法人登記支援",
  "法律関連支援",
  "マーケティング支援",
  "バーチャルオフィス・区画貸し",
  "人材採用支援",
  "経理・会計関連サポート",
  "総務・IT関連支援",
  "給与・保険支払い支援",
  "DXコンサルティング",
  "プロトタイプ開発",
  "アプリ開発",
  "ゲームシステム開発",
  "WEBシステム開発",
  "2D/3Dデザイン制作",
  "現地法人設立支援",
]

const sliderImages = [
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_2294-DrlK1NjUGYJluqaQnnM8oLXTxihYxk.jpeg",
    alt: "モダンなオフィススペースとガラスパーティション",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_2295-hlm0KsYKp728bLzdKsL3rGwZlU8754.jpeg",
    alt: "経理・会計関連業務イメージ",
  },
]

export function AboutAndService() {
  return (
    <>
      <div className="py-24 sm:py-32 bg-gray-50" id="about">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {/* About Section */}
          <ScrollAnimation>
            <div className="mb-40">
              <h2
                className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-gray-900 mb-24"
                translate="no"
              >
                About
              </h2>
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                <div className="lg:col-span-6">
                  <p className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-primary mb-8">
                    ベトナムオフショア20年の実績
                  </p>
                  <p className="text-lg leading-8 text-gray-600">
                    ベトナムオフショアのパイオニア企業として、 2001年8月の設立以来、これまで300社を超える
                    日本企業様向けにソフトウエア開発など さまざまなサービスをご利用いただいております。
                  </p>
                </div>
                <div className="lg:col-span-6">
                  <div className="relative w-full h-[200px] rounded-lg overflow-hidden shadow-md">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_2290-7LsKpORxhHYsI2s7hYvuBo6nKWPEno.jpeg"
                      alt="Client Logos"
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </div>

      {/* Full-width Image Section */}
      <div className="relative h-screen">
        <ImageSlider images={sliderImages} />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <ScrollAnimation>
              <div className="text-center">
                <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-white">SERVICE</h2>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </div>

      {/* Service List Section */}
      <div className="py-20 sm:py-28 bg-gray-50" id="service">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollAnimation>
            <div className="relative pt-14">
              <h3 className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-primary text-white text-xl md:text-2xl font-bold py-2 px-6 rounded-full">
                ご提供サービス
              </h3>
              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-3">
                  {services.map((service, index) => (
                    <div key={index} className="flex items-start py-1">
                      <div className="mr-2 mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                      <span className="text-gray-700 text-base">{service}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </>
  )
}

