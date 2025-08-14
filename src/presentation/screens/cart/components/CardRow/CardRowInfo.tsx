import { handleFormatPriceToBR } from '@/presentation/hooks/formats/handle-format-price-to-br'
import Image from 'next/image'

export function CardRowInfo({
  price,
  title,
  image,
}: {
  price: number
  title: string
  image: string
}) {
  return (
    <div className="w-full max-w-[280px] flex gap-4 sm:items-center items-start">
      <Image src={image} alt={title} width={91} height={114} />
      <div className="flex sm:flex-col flex-row gap-2">
        <h3 className="text-sm text-secondary font-bold leading-none">
          {title}
        </h3>
        <p className="text-md text-secondary font-bold leading-none">
          {handleFormatPriceToBR(price)}
        </p>
      </div>
    </div>
  )
}
