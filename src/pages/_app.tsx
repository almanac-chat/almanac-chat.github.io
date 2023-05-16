import '@/styles/globals.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {

  return (
    <>
      <div className="fixed inset-0 flex justify-center">
        <div className="flex w-full">
          <div className="w-full bg-white dark:bg-zinc-900" />
        </div>
      </div>
      <div className="relative">
        {/* <Header /> */}
        <main>
        <Component {...pageProps} />
        </main>

      </div>
    </>
  )
}