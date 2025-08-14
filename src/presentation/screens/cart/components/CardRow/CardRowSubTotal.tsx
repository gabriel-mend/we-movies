import { handleFormatPriceToBR } from '@/presentation/hooks/formats'

export function CardRowSubTotal({ price }: { price: number }) {
  return (
    <p className="w-full max-w-[348px] text-md font-bold text-secondary">
      {handleFormatPriceToBR(price)}
    </p>
  )
}
