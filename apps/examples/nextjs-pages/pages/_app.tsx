import "./globals.css"
import Head from "next/head"
import Footer from "@/components/footer"
import Header from "@/components/header"
import { Inter } from "next/font/google"
import { SessionProvider } from "next-auth/react"
import type { AppProps } from "next/app"

const inter = Inter({ subsets: ["latin"] })

export default function MyApp({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  console.log("_app.session", { pageProps, session })
  return (
    <SessionProvider session={session}>
      <div className={inter.className}>
        <Component {...pageProps} />
      </div>
    </SessionProvider>
  )
  // <Header />
  // <Footer />
}
