import { useRouter } from "next/router"
import { HiArrowCircleLeft } from "react-icons/hi"

import { getErrorLayout } from "@/components/ErrorLayout"

import { Main } from "@/components/Main"
import { Link } from "@/components/small/Link"
import { ApplicationMark } from "@/components/small/ApplicationLogo"

import { NextPageWithLayout } from "@/types/app.type"

const Custom404: NextPageWithLayout = () => {
  const { asPath } = useRouter()

  return (
    <Main title="404" className="container">
      <div className="h-screen flex justify-center items-center">
        <div className="max-w-lg w-full space-y-4 p-4 md:p-10">
          <Link href="/">
            <ApplicationMark className="mx-auto h-12 w-auto animate-bounce" />
          </Link>
          <h2 className="mt-4 text-center text-2xl font-extrabold text-gray-900">
            404 Page Not Found!
          </h2>
          <p className="my-2 text-center text-sm text-gray-600">
            The page <code>{asPath}</code> you are visiting does not exist.
          </p>
          <div className="relative mt-4">
            <Link href="/" className="group inline-flex justify-center items-center w-full text-sm font-semibold bg-gray-700 text-white py-3 px-4 rounded-lg hover:bg-gray-800 hover:ring-2 hover:ring-offset-2 hover:ring-blue-500 ease-in-out duration-150">
              <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                <HiArrowCircleLeft className="h-5 w-5 text-red-500 group-hover:text-red-400" />
              </span>
              <span>Back to Home</span>
            </Link>
          </div>
        </div>
      </div>
    </Main>
  )
}

Custom404.getLayout = getErrorLayout

export default Custom404
