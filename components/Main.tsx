import Seo from "./medium/Seo"

import { classNames } from "@/utils/helper"

type MainType = {
  title: string,
  className?: string,
  description?: string,
}

export const Main: React.FC<MainType> = ({ title, description, className, children }) => {
  return (
    <>
      <Seo title={`${title} - Buku Angkatan`} description={description} />
      <main className={classNames("container", className)}>
        {children}
      </main>
    </>
  )
}