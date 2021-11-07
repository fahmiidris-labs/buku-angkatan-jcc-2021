import Head from "next/head"

import type { SeoType } from "@/types/app.type"

const Seo: React.FC<SeoType> = ({
  title,
  robots = "follow, index",
  description = "Website Buku Angkatan Peserta Jabar Coding Camp 2021.",
}) => {
  return (
    <Head>
      <title>{title}</title>

      <meta content={robots} name="robots" />
      <meta content={description} name="description" />
    </Head>
  )
}

export default Seo
