import { Button } from '@/presentation/external/shadcn/ui/button'
import { ContentInfo } from '@/presentation/shared/components/layout'
import reloadPersonIcon from '@public/icons/reload-person-icon.svg'
import Image from 'next/image'
import Link from 'next/link'

export function CartMoviesEmpty() {
  return (
    <ContentInfo title="Parece que não há nada por aqui :(">
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
    </ContentInfo>
  )
}
