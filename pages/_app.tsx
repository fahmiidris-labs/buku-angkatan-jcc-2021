import "../styles/globals.css"
// import "tailwindcss/tailwind.css"

import Router from "next/router"
import ProgressBar from "@badrap/bar-of-progress"

import { AppPropsWithLayout } from "@/types/app.type"

// Loading Progress using @badrap/bar-of-progress
const progress = new ProgressBar({
  size: 2,
  color: "#F43F5E",
  className: "bar-of-progress",
  delay: 100,
})

// this fixes safari jumping to the bottom of the page
// when closing the search modal using the `esc` key
if (typeof window !== "undefined") {
  progress.start()
  progress.finish()
}
Router.events.on("routeChangeStart", progress.start)
Router.events.on("routeChangeComplete", () => {
  progress.finish()
  window.scrollTo(0, 0)
})
Router.events.on("routeChangeError", progress.finish)

const MyApp = ({ Component, pageProps }: AppPropsWithLayout) => {
  const getLayout = Component.getLayout || ((page) => page)

  return getLayout(
    <Component {...pageProps} />
  )
}

export default MyApp
