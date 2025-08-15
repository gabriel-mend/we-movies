import { Button } from '@/presentation/external/shadcn/ui/button'
import Image from 'next/image'
import plusIcon from '@public/icons/plus-icon.svg'
import minusIcon from '@public/icons/minus-icon.svg'
import { CartMovie } from '@/business/domain/entities/movie'

export function CardRowControl({
  amount,
  handleIncrement,
  handleDecrement,
}: {
  amount: number
  handleIncrement: () => void
  handleDecrement: () => void
}) {
  return (
    <div className="w-full max-w-[348px] flex items-center gap-[11px] sm:gap-[2px]">
      <Button
        className="cursor-pointer p-0 sm:px-[9px] sm:py-4"
        variant="ghost"
        onClick={handleDecrement}
      >
        <Image src={minusIcon} alt="Remover item" width={18} height={18} />
      </Button>

      <input
        className="border-gray-light border-[1px] rounded-sm w-[59px] sm:w-[62px] h-[26px] text-center"
        value={amount}
        type="number"
        disabled
      />

      <Button
        className="cursor-pointer p-0 sm:px-[9px] sm:py-4"
        variant="ghost"
        onClick={handleIncrement}
      >
        <Image src={plusIcon} alt="Adicionar item" width={18} height={18} />
      </Button>
    </div>
  )
}
