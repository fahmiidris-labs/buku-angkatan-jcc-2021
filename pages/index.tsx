import { Main } from "@/components/Main"
import { Hero } from "@/components/home/Hero"
import { Link } from "@/components/small/Link"
import { getAppLayout } from "@/components/AppLayout"

import type { NextPageWithLayout } from "@/types/app.type"

const Home: NextPageWithLayout = () => {
  return (
    <section id="hero" className="bg-white overflow-x-hidden">
      <Main title="Home">
        <div className="min-h-screen flex flex-col-reverse md:flex-row justify-center items-center">
          <div className="md:flex-1">
            <figure className="flex flex-col items-start select-none">
              <blockquote>
                <h4 className="text-base tracking-wide mb-1 text-gray-700">Untuk Peserta Jabar Coding Camp 2021</h4>
                <h1 className="order-1 py-2 text-3xl md:text-5xl md:leading-none font-pop text-gray-700">
                  <span className="text-gradient-primary">Buku Tahunan</span> Peserta JCC 2021
                </h1>
                <p className="order-2 leading-relaxed text-sm sm:text-base mr-6 text-gray-700">
                  Tinggal didesa, Rezeki kota, Skill mendunia.
                </p>
              </blockquote>
              <div className="order-4 w-full py-5 text-center grid grid-cols-1 gap-3 sm:flex sm:gap-0 sm:space-x-6">
                <Link href="/participant-list" className="inline-flex justify-center items-center text-sm font-semibold bg-blue-500 text-white py-3 px-4 rounded-lg hover:bg-blue-600 hover:ring-2 hover:ring-gray-700 hover:ring-offset-2 duration-200 ease-in-out">
                  List Peserta JCC 2021
                </Link>
              </div>
            </figure>
          </div>
          <div className="md:flex-1 flex justify-center items-center">
            <Hero />
          </div>
        </div>
      </Main>
    </section>
  )
}

Home.getLayout = getAppLayout

export default Home