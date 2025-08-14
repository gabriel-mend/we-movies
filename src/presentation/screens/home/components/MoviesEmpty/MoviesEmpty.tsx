import { Button } from '@/presentation/external/shadcn/ui/button'
import reloadPersonIcon from '@public/icons/reload-person-icon.png'
import Image from 'next/image'
import Link from 'next/link'

export function MoviesEmpty() {
  return (
    <div className="h-[516px] md:h-[596px] flex flex-col items-center w-full bg-white text-secondary rounded-sm py-16 p-2">
      <h2 className="text-2xl font-bold text-center md:max-w-full max-w-[210px] leading-none">
        Parece que não há nada por aqui :(
      </h2>
      <div className="flex flex-col items-center justify-center my-6  ">
        <Image src={reloadPersonIcon} alt="" width={178} height={264} />
        <div className="md:w-[447px] w-[173px] h-[1.36px] bg-[#3F3D56]"></div>
      </div>
      <Button
        className="w-[173px] h-[40px] text-white font-bold text-xs cursor-pointer rounded-sm"
        asChild
      >
        <Link href="/">Recarregar página</Link>
      </Button>
    </div>
  )
}
