import type { NextPage } from "next"
import type { AppProps } from "next/app"

export type NextPageWithLayout = NextPage & {
  getLayout?: (page: React.ReactElement) => React.ReactNode
}

export type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

export type SeoType = {
  title: string,
  description?: string,
  robots?: string,
}