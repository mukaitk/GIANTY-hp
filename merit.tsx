import Image from "next/image"
import { ScrollAnimation } from "./scroll-animation"

export function Merit() {
  return (
    <div className="py-24 sm:py-32 bg-white" id="merits">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <ScrollAnimation>
          <div className="mb-20 md:pl-[calc(50%+2rem)]">
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-gray-900 mb-6" translate="no">
              MERIT
            </h2>
            <p className="text-2xl md:text-3xl font-bold text-primary">ベトナム進出におけるメリット</p>
          </div>
        </ScrollAnimation>

        <div className="space-y-12">
          {/* Merit 01 */}
          <ScrollAnimation>
            <div className="flex flex-col md:flex-row gap-8 items-center bg-gray-50/50 rounded-lg overflow-hidden">
              <div className="w-full md:w-1/2 relative h-[300px]">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_2305-YTBdrbPe0KSko68a5KeWUxzwetkTMK.jpeg"
                  alt="ホーチミン市の街並み"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="w-full md:w-1/2 p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  <span className="text-primary">01</span> ベトナム市場へのアクセスの向上
                </h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">■ 現地市場への深い参入</h4>
                    <p className="text-gray-600">
                      現地法人を持つことで、現地の流通ネットワークや市場に対して直接的にアクセスできます。
                    </p>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">■ 地域ニーズへの迅速な対応</h4>
                    <p className="text-gray-600">
                      現地の文化や顧客ニーズを理解し、迅速に商品やサービスを適応させることが可能です。
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollAnimation>

          {/* Merit 02 */}
          <ScrollAnimation>
            <div className="flex flex-col md:flex-row gap-8 items-center bg-gray-50/50 rounded-lg overflow-hidden">
              <div className="w-full md:w-1/2 relative h-[300px]">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_2306-RfuDfe6O6tVrSAToY7XpuwbMUfM59K.jpeg"
                  alt="ビジネスパートナーシップ"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="w-full md:w-1/2 p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  <span className="text-primary">02</span> 信頼性とブランドイメージの向上
                </h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">■ 顧客や取引先からの信頼</h4>
                    <p className="text-gray-600">
                      現地法人があることで、地元の顧客やパートナーに対して信頼性が高まり、ビジネスチャンスが広がります。
                    </p>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">■ ブランドイメージの向上</h4>
                    <p className="text-gray-600">
                      「地域密着型」としてのイメージが強まり、現地市場での認知度や好感度が向上します。
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollAnimation>

          {/* Merit 03 */}
          <ScrollAnimation>
            <div className="flex flex-col md:flex-row gap-8 items-center bg-gray-50/50 rounded-lg overflow-hidden">
              <div className="w-full md:w-1/2 relative h-[300px]">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_2307-bPgM584fZgFaXhGO4SZngZ7upl8o2k.jpeg"
                  alt="人材採用"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="w-full md:w-1/2 p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  <span className="text-primary">03</span> 人材採用の強化
                </h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">■ 現地人材の雇用</h4>
                    <p className="text-gray-600">現地法人を設立することで、現地の優秀な人材を雇用しやすくなります。</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">■ 労働法遵守</h4>
                    <p className="text-gray-600">
                      現地法人化することで、ベトナムの労働法に基づいた採用・運営が可能になり、トラブルを回避できます。
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollAnimation>

          {/* Merit 04 */}
          <ScrollAnimation>
            <div className="flex flex-col md:flex-row gap-8 items-center bg-gray-50/50 rounded-lg overflow-hidden">
              <div className="w-full md:w-1/2 relative h-[300px]">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_2308-NxO8Vogj1Q7UQZNsJg5sY5zBfTxOVr.jpeg"
                  alt="法的安定性"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="w-full md:w-1/2 p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  <span className="text-primary">04</span> 法的および税務的なメリット
                </h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">■ 法的安定性</h4>
                    <p className="text-gray-600">
                      現地法人として登記することで、法的な保護を受けやすく、安定した事業運営が可能になります。
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </div>
  )
}

