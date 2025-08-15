import { Button } from '@/presentation/external/shadcn/ui/button'
import trashIcon from '@public/icons/trash-icon.svg'
import { handleFormatPriceToBR } from '@/presentation/shared/hooks/formats'
import Image from 'next/image'

export function CardRowMobileContentInfoGroup({
  title,
  price,
  handleRemoveMovieFromCart,
}: {
  title: string
  price: number
  handleRemoveMovieFromCart: () => void
}) {
  return (
    <div className="w-full flex gap-4 justify-between items-center h-[22px]">
      <p className="text-secondary text-sm font-bold min-w-[102px]">{title}</p>
      <span className="text-secondary text-md font-bold min-w-[66px]">
        {handleFormatPriceToBR(price)}
      </span>
      <Button
        className="flex items-center justify-center p-0 cursor-pointer"
        variant="ghost"
        onClick={handleRemoveMovieFromCart}
        asChild
      >
        <Image src={trashIcon} alt="Deletar Item" width={18} />
      </Button>
    </div>
  )
}
