import type { Metadata } from "next"
import "./globals.css"
import type React from "react" // Import React

export const metadata: Metadata = {
  title: "GIANTY - ベトナム進出支援サービス",
  description: "ベトナムオフィスショア20年の実績でベトナム進出を支援します",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja" className="scroll-smooth">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Zen+Kaku+Gothic+New:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
        <style>{`
          html {
            scroll-padding-top: 80px;
          }
        `}</style>
      </head>
      <body className="min-h-screen bg-white font-sans antialiased">{children}</body>
    </html>
  )
}



import './globals.css'