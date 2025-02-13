import Link from "next/link"

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white">
      <main className="container mx-auto px-6 py-24">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold text-center mb-12">個人情報保護方針</h1>

          <div className="space-y-6 text-gray-800">
            <div className="text-right space-y-1">
              <p>制定日：平成22年12月01日</p>
              <p>株式会社GIANTY</p>
              <p>代表取締役　ホー・トゥン・ラム</p>
            </div>

            <p className="mt-8">
              株式会社GIANTYは、消費者やお取引先にご満足いただけるより良い商品やサービスの開発およびこれらの販売促進などを行っていくという考えのもと、モバイル通信に関する事業を行っています。当社が事業活動を行う上で、個人情報を適切に取り扱うことは社会的責務であると考えています。当社では、この責務を全うするために、以下の取り組みを実施します。
            </p>

            <section className="space-y-2">
              <h2 className="font-bold">第１条　個人情報の取得、利用および提供について</h2>
              <p>
                当社の全ての事業で取り扱う個人情報および従業員の個人情報について、適切な取得、利用および提供を行い、特定した利用目的の達成に必要な範囲を超えて個人情報を取り扱うことはなく、そのために必要な措置も講じます。利用目的を超えて個人情報の取り扱いを行う場合には、あらかじめ本人の同意を得ます。
              </p>
              <p>
                適切に個人情報の取り扱いを行うため、継続的に個人情報保護マネージメントシステムを見直し、改善します。
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="font-bold">第２条　個人情報に関する法令や指針、規範について</h2>
              <p>個人情報に関する法令および国が定める指針その他の規範を遵守いたします。</p>
            </section>

            <section className="space-y-2">
              <h2 className="font-bold">第３条　個人情報の安全管理について</h2>
              <p>
                個人情報への不正アクセスや、個人情報の漏えい、紛失、破壊、改ざん等に対して、合理的な防止および是正措置を行います。
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="font-bold">第４条　個人情報取り扱い事業者および個人情報保護管理者について</h2>
              <p>株式会社GIANTY　個人情報保護管理者　取締役ＣＯＯ</p>
            </section>

            <section className="space-y-2">
              <h2 className="font-bold">第５条　開示対象個人情報の利用目的について</h2>
              <ul className="list-none space-y-2">
                <li>（１）コンテンツその他当社サービスの提供のため</li>
                <li>（２）当社および第三者の商品等の情報提供または広告宣伝のため</li>
                <li>（３）統計的解析およびそれらを利用した個人を特定できない形でのマーケティング行為のため</li>
                <li>（４）アフィリエイトまたはポイントサービスの提供のため</li>
                <li>（５）料金請求、課金計算のため</li>
                <li>（６）問い合わせまたは苦情の際の本人確認およびその対応のため</li>
                <li>（７）新サービスの開発または既存サービスの改善のため</li>
                <li>（８）その他当社の各サービスにおいて個別に定める目的のため</li>
              </ul>
            </section>

            <section className="space-y-2">
              <h2 className="font-bold">第６条　個人情報に関する苦情もしくは相談または開示等の請求について</h2>
              <p>
                個人情報に関する苦情もしくは相談または個人情報の利用目的の通知、開示、内容の訂正、追加、削除、利用の停止、消去もしくは第三者への提供の停止（以下「開示等」といいます）を求められる場合、後記記載いたします個人情報に関する連絡先までご連絡ください。
                なお、開示等の請求に関しましては、お客様よりご連絡いただきました後、当社より「個人情報開示請求書」および事務手数料の「請求書」（開示または通知請求の場合のみ）を送付いたしますので、「個人情報開示請求書」に必要事項を記載の上、本人確認書（運転免許証の写し、パスポートの写し、外国人登録証の写しのいずれか１点）と共に当社までご返送ください。
              </p>
              <p>
                また、代理人の方が請求される場合は、請求者本人の本人確認書以外に「委任状」および「代理人の本人確認書」を同封してください。
              </p>
            </section>

            <section className="mt-12 space-y-6">
              <div>
                <h3 className="font-bold mb-2">＜個人情報に関する連絡先＞</h3>
                <div className="space-y-1">
                  <p>株式会社GIANTY　個人情報問い合わせ窓口</p>
                  <p>住所：東京都港区北青山2-14-4　the ARGYLE aoyama 6F</p>
                  <p>ＴＥＬ：03-4530-6338（平日10：00～18：00）</p>
                  <p>Eメール：dir@i-chart.jp</p>
                </div>
              </div>

              <div>
                <h3 className="font-bold mb-2">＜事務手数料（開示または通知請求の場合）＞</h3>
                <div className="space-y-1">
                  <p>3,150円（税込）※開示件数ごとに発生します。</p>
                  <p>当該請求書記載の銀行口座にお振込をお願いいたします。</p>
                  <p>なお、振込手数料は、お客様負担とさせていただきます。</p>
                </div>
              </div>
            </section>
          </div>

          <div className="mt-16 text-center">
            <Link href="/" className="text-primary hover:text-primary/80 transition-colors">
              トップページに戻る
            </Link>
          </div>
        </div>
      </main>
    </div>
  )
}

