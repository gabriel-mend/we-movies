import { Button } from '@/presentation/external/shadcn/ui/button'
import addCartIcon from '@public/icons/add-cart-icon.svg'
import Image from 'next/image'

export function MovieCardButton() {
  return (
    <Button className="w-full h-[40px] text-white font-bold text-xs cursor-pointer rounded-sm">
      <span className="flex gap-[3px] font-normal">
        <Image src={addCartIcon} alt="" /> 0
      </span>
      ADICIONAR AO CARRINHO
    </Button>
  )
}
