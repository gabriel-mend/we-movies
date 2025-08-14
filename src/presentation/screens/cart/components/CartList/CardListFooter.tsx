import { Button } from '@/presentation/external/shadcn/ui/button'
import { handleFormatPriceToBR } from '@/presentation/hooks/formats'
import Link from 'next/link'

export function CardListFooter({ price }: { price: number }) {
  return (
    <div className="flex flex-col gap-6 pt-6">
      <div className="h-[1px] w-full bg-gray-regular"></div>
      <div className="flex items-center justify-between">
        <Button
          className="w-[173px] h-[40px] text-white font-bold text-xs cursor-pointer rounded-sm"
          asChild
        >
          <Link href="/">FINALIZAR PEDIDO</Link>
        </Button>
        <div className="flex gap-[5px] items-center">
          <span className="text-gray-regular text-sm font-bold">TOTAL</span>
          <p className="text-secondary text-center text-2xl font-bold min-w-[130px]">
            {handleFormatPriceToBR(price)}
          </p>
        </div>
      </div>
    </div>
  )
}
