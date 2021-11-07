import Image from "next/image"

import { Main } from "@/components/Main"
import { getAppLayout } from "@/components/AppLayout"

import DATA from "@/data/main.json"

import type { NextPageWithLayout } from "@/types/app.type"

const Home: NextPageWithLayout = () => {
  return (
    <Main title="List Peserta" className="relative pb-12 pt-24">
      <div className="min-h-screen">
        <div className="pb-8">
          <div className="text-xl font-semibold font-pop">
            Peserta Jabar Coding Camp 2021
          </div>
          <p>
            Tinggal didesa, Rezeki kota, Skill mendunia.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-8">
          {DATA.map((item, i) => (
            <div key={i}>
              <div className="group relative">
                <div className="absolute rotate-3 rounded-xl z-10 w-full h-full bg-yellow-300/70"></div>
                <Image src={item.Attachment} alt={item.Author} width={400} height={500} priority={true} className="z-20 object-cover rounded-xl" />
                <button className="absolute z-30 bottom-4 right-3 bg-yellow-300 px-3 py-1 rounded-lg font-semibold text-sm">{item.Contact}</button>
              </div>
              <h1 className="text-base font-pop">{item.Author}</h1>
              <p className="text-sm">{item.Body}</p>
              <div className="flex flex-col pt-3">
                <div className="font-semibold">Kesukaan :</div>
                <div>{item.Like}</div>
              </div>
              <div className="flex flex-col pt-3">
                <div className="font-semibold">Ketidaksukaan :</div>
                <div>{item.Dislike}</div>
              </div>
              <div className="flex flex-col pt-3">
                <div className="font-semibold">Quote :</div>
                <div>{item.Quote}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Main>
  )
}

Home.getLayout = getAppLayout

export default Home