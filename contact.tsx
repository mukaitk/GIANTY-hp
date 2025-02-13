import Link from "next/link"
import { ScrollAnimation } from "./scroll-animation"
import type React from "react" // Added import for React

export function Contact() {
  const FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLSehg20rI5rhuh_GJGF0vHPECO3jUPTmLbpR30f9I056CZd_Xg/viewform"

  const handleTopClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <div className="py-24 sm:py-32 bg-gray-50" id="contact">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <ScrollAnimation>
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-12 whitespace-nowrap overflow-hidden text-ellipsis">
              まずは一度お問い合わせください
            </p>
            <Link
              href={FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-primary hover:bg-primary/90 text-white text-lg md:text-xl font-bold py-4 px-8 rounded-md transition-colors"
            >
              問い合わせはこちら
            </Link>
          </div>
        </ScrollAnimation>

        <footer className="mt-24 text-center">
          <nav className="space-x-8">
            <Link href="#top" onClick={handleTopClick} className="text-gray-600 hover:text-primary transition-colors">
              TOP
            </Link>
            <Link href="/privacy" className="text-gray-600 hover:text-primary transition-colors">
              プライバシーポリシー
            </Link>
          </nav>
        </footer>
      </div>
    </div>
  )
}

