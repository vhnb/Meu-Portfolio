import "@/styles/globals.css"
import type { AppProps } from "next/app"
import Header from "@/components/Header"
import { Inter } from "next/font/google"
import { Toaster } from "@/components/ui/sonner"

const inter = Inter({
  subsets: ["latin"],
  weight: ["100","200","300","400","500","600","700","800","900"],
  display: "swap",
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={inter.className}>
      <Toaster />
      <Header />
      <Component {...pageProps} />
    </main>
  )
}
