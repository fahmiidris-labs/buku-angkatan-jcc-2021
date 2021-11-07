import Head from "next/head"

import type { SeoType } from "@/types/app.type"

const Seo: React.FC<SeoType> = ({
  title,
  robots = "follow, index",
  description = "Tiga Tingkat merupakan platform switch schools, yang bertujuan membantu anak SMA untuk ikut menikmati pelajaran anak SMK, dan sebalik nya.",
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
