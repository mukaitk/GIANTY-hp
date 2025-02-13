"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"

const FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLSehg20rI5rhuh_GJGF0vHPECO3jUPTmLbpR30f9I056CZd_Xg/viewform"

const navigation = [
  { name: "ホーム", href: "#top" },
  { name: "ABOUT", href: "#about" },
  { name: "SERVICE", href: "#service" },
  { name: "メリット", href: "#merits" },
  { name: "３つのサポート", href: "#support" },
  { name: "ベトナム進出事例紹介", href: "#case-studies" },
]

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("#")) {
      e.preventDefault()
      if (href === "#top") {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        })
      } else {
        const element = document.querySelector(href)
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
    }
  }

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl">
        <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
          <div className="flex lg:flex-1">
            <Link href="/" className="-m-1.5 p-1.5">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_2283-lu8HwYyF3UrakSJmPyJ1Bn2uNO1Z7r.jpeg"
                alt="GIANTY"
                width={120}
                height={40}
                className="h-8 w-auto"
              />
            </Link>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className={`-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 ${
                isScrolled ? "text-gray-700" : "text-white"
              }`}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span className="sr-only">メニューを開く</span>
              {mobileMenuOpen ? (
                <X className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={(e) => handleClick(e, item.href)}
                className={`text-sm font-bold tracking-wider transition-colors hover:text-primary ${
                  isScrolled ? "text-gray-900" : "text-white"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <Link
              href={FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={`text-sm font-bold tracking-wider px-6 py-3 transition-colors ${
                isScrolled
                  ? "text-white bg-secondary hover:bg-secondary/90"
                  : "text-secondary bg-white hover:bg-white/90"
              }`}
            >
              お問い合わせ
            </Link>
          </div>
        </nav>
        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden">
            <div className="fixed inset-0 z-50">
              <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                <div className="flex items-center justify-between">
                  <Link href="/" className="-m-1.5 p-1.5">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_2283-lu8HwYyF3UrakSJmPyJ1Bn2uNO1Z7r.jpeg"
                      alt="GIANTY"
                      width={120}
                      height={40}
                      className="h-8 w-auto"
                    />
                  </Link>
                  <button
                    type="button"
                    className="-m-2.5 rounded-md p-2.5 text-gray-700"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <span className="sr-only">メニューを閉じる</span>
                    <X className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>
                <div className="mt-6 flow-root">
                  <div className="-my-6 divide-y divide-gray-500/10">
                    <div className="space-y-2 py-6">
                      {navigation.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          onClick={(e) => {
                            handleClick(e, item.href)
                            setMobileMenuOpen(false)
                          }}
                          className="-mx-3 block rounded-lg px-3 py-2 text-base font-bold tracking-wider text-gray-900 hover:bg-gray-50"
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                    <div className="py-6">
                      <Link
                        href={FORM_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="-mx-3 block px-3 py-2.5 text-base font-bold tracking-wider text-white bg-secondary hover:bg-secondary/90"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        お問い合わせ
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

