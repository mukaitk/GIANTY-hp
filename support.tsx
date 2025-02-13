import { Building2, Users, TrendingUp } from "lucide-react"
import { ScrollAnimation } from "./scroll-animation"

export function Support() {
  return (
    <div className="py-24 sm:py-32 bg-white" id="support">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <ScrollAnimation>
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-gray-900 mb-6">
              ３つのサポート
            </h2>
            <p className="text-2xl md:text-3xl font-bold text-primary">ベトナム進出、法人化におけるサポート</p>
          </div>
        </ScrollAnimation>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Support 01 */}
          <ScrollAnimation>
            <div className="bg-gray-50/50 rounded-lg p-8 relative h-[520px] flex flex-col">
              <div className="text-6xl font-bold text-gray-100 absolute top-4 right-4">01</div>
              <div className="relative flex flex-col h-full">
                <div className="text-white bg-primary rounded-full w-16 h-16 flex items-center justify-center mb-6">
                  <Building2 className="h-8 w-8" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">現地法人設立支援</h3>
                <p className="mb-6 text-gray-600">現地法人設立を一括でサポートします。</p>
                <div className="space-y-4">
                  <h4 className="font-bold text-gray-900">【 主なサポート内容 】</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>人設立の目的と業種の確認・法人形態の選択</li>
                    <li>投資資本・登記と許認可の取得</li>
                    <li>登記住所と事務所・代表者と株主の決定</li>
                    <li>税務関連手続き・労働法関連手続き</li>
                    <li>銀行口座の開設・コンプライアンスと定期報告</li>
                    <li>コミュニケーションと文化の配慮</li>
                  </ul>
                </div>
              </div>
            </div>
          </ScrollAnimation>

          {/* Support 02 */}
          <ScrollAnimation>
            <div className="bg-gray-50/50 rounded-lg p-8 relative h-[520px] flex flex-col">
              <div className="text-6xl font-bold text-gray-100 absolute top-4 right-4">02</div>
              <div className="relative flex flex-col h-full">
                <div className="text-white bg-primary rounded-full w-16 h-16 flex items-center justify-center mb-6">
                  <Users className="h-8 w-8" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">人材採用支援</h3>
                <p className="mb-6 text-gray-600">
                  ２０年以上蓄積された独自の採用ノウハウと外部ネットワークを用いてサポート
                </p>
                <div className="space-y-4">
                  <h4 className="font-bold text-gray-900">【 主なサポート内容 】</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>採用目的と人材の役割</li>
                    <li>法的要件と雇用規制の確認</li>
                    <li>採用予算</li>
                    <li>現地文化・習慣の理解</li>
                  </ul>
                </div>
              </div>
            </div>
          </ScrollAnimation>

          {/* Support 03 */}
          <ScrollAnimation>
            <div className="bg-gray-50/50 rounded-lg p-8 relative h-[520px] flex flex-col">
              <div className="text-6xl font-bold text-gray-100 absolute top-4 right-4">03</div>
              <div className="relative flex flex-col h-full">
                <div className="text-white bg-primary rounded-full w-16 h-16 flex items-center justify-center mb-6">
                  <TrendingUp className="h-8 w-8" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">現地向けマーケティング支援</h3>
                <p className="mb-6 text-gray-600">ターゲット市場に最適化した戦略を作成</p>
                <div className="space-y-4">
                  <h4 className="font-bold text-gray-900">【 主なサポート内容 】</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>市場調査：ターゲット市場の文化・習慣の理解</li>
                    <li>現地の消費者ニーズとトレンドの調査・競合分析</li>
                    <li>ブランディング/チャンネル戦略/コンテンツ</li>
                  </ul>
                </div>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </div>
  )
}

