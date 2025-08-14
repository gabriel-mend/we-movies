import { handleFormatPriceToBR } from '@/presentation/hooks/formats'

export function CardRowSubTotal({ price }: { price: number }) {
  return (
    <div className="w-full max-w-[66px] sm:max-w-[348px] text-md font-bold text-secondary">
      <span className="text-xs text-gray-regular flex sm:hidden w-[63px] font-bold">
        SUBTOTAL
      </span>
      <p className="text-secondary text-md font-bold">
        {handleFormatPriceToBR(price)}
      </p>
    </div>
  )
}
