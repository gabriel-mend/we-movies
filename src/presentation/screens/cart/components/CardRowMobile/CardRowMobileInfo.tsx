import { Button } from '@/presentation/external/shadcn/ui/button'
import trashIcon from '@public/icons/trash-icon.svg'
import { handleFormatPriceToBR } from '@/presentation/shared/hooks/formats'
import Image from 'next/image'

export function CardRowMobileInfo({
  title,
  price,
}: {
  title: string
  price: number
}) {
  return (
    <div className="flex gap-4 items-center h-[22px]">
      <p className="text-secondary text-sm font-bold min-w-[102px]">{title}</p>
      <span className="text-secondary text-md font-bold min-w-[66px]">
        {handleFormatPriceToBR(price)}
      </span>
      <Button className="flex items-center justify-center p-0" variant="ghost">
        <Image src={trashIcon} alt="Deletar Item" width={18} />
      </Button>
    </div>
  )
}
