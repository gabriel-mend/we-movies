import { Button } from '@/presentation/external/shadcn/ui/button'
import trashIcon from '@public/icons/trash-icon.svg'
import Image from 'next/image'

export function CardRowActions() {
  return (
    <div className="text-right">
      <Button className="w-[24px] p-0" variant="ghost">
        <Image src={trashIcon} alt="Deletar Item" width={24} height={24} />
      </Button>
    </div>
  )
}
