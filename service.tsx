import Image from "next/image"
import { ScrollAnimation } from "./scroll-animation"

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

export function Service() {
  return (
    <div className="py-24 sm:py-32 bg-gray-50" id="service">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <ScrollAnimation>
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold leading-tight text-primary mb-4">SERVICE</h2>
            <p className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">ご提供サービス</p>
          </div>
        </ScrollAnimation>

        <ScrollAnimation>
          <div className="mt-16 relative">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
              {/* サービスリスト */}
              <div className="lg:col-span-7 bg-white rounded-lg shadow-md p-8 z-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2">
                  {services.map((service, index) => (
                    <div key={index} className="flex items-start py-2">
                      <div className="mr-2 mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                      <span className="text-gray-700">{service}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* 画像セクション */}
              <div className="lg:col-span-5 relative h-full min-h-[600px]">
                <div className="absolute inset-0 flex flex-col justify-between">
                  <div className="relative h-[48%] w-full">
                    <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-primary/5 clip-diagonal-1" />
                    <div className="absolute inset-0 overflow-hidden clip-diagonal-1">
                      <Image
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_2294-4vUQyNyCluVbbzxKe8JxVNV7jNNGjw.jpeg"
                        alt="モダンなオフィススペースとガラスパーティション"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <div className="relative h-[48%] w-[90%] ml-auto">
                    <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-primary/5 clip-diagonal-2" />
                    <div className="absolute inset-0 overflow-hidden clip-diagonal-2">
                      <Image
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_2295-3KHMMgNTsm5Vpvxv5DkBOyuVwXFtZl.jpeg"
                        alt="経理・会計関連業務イメージ"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </div>
  )
}

