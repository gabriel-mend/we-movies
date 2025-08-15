import { handleFormatPriceToBR } from '@/presentation/shared/hooks/formats'

export function MovieCardPrice({ price }: Readonly<{ price: number }>) {
  return (
    <span className="h-[22px] text-md font-bold text-gray-dark leading-none">
      {handleFormatPriceToBR(price)}
    </span>
  )
}
