import { Button } from '@/presentation/external/shadcn/ui/button'
import Image from 'next/image'
import plusIcon from '@public/icons/plus-icon.svg'
import minusIcon from '@public/icons/minus-icon.svg'

export function CardRowControl() {
  return (
    <div className="w-full max-w-[348px] flex items-center gap-[2px]">
      <Button className="cursor-pointer px-[9px] py-4" variant="ghost">
        <Image src={minusIcon} alt={'Remover item'} width={18} height={18} />
      </Button>

      <div className="border-gray-light border-[1px] rounded-sm px-[26.5px] py-[3.5px]">
        1
      </div>

      <Button className="cursor-pointer px-[9px] py-4" variant="ghost">
        <Image src={plusIcon} alt={'Adicionar item'} width={18} height={18} />
      </Button>
    </div>
  )
}
