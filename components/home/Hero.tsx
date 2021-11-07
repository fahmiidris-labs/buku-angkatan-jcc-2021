import Image from "next/image"

import HeroImage from "public/hero.png"

export const Hero: React.FC = () => {
  return (
    <div className="pt-16 pb-5 md:pt-0 md:pb-0">
      <div className="relative select-none">
        <Image src={HeroImage} alt="Hero" width={600} height={600} priority={true} className="object-cover" />
      </div>
    </div>
  )
}
