import { Button } from '@/presentation/external/shadcn/ui/button'
import addCartIcon from '@public/icons/add-cart-icon.svg'
import Image from 'next/image'
import { tv } from 'tailwind-variants'

const button = tv({
  base: 'w-full h-[40px] text-white font-bold text-xs cursor-pointer rounded-sm',
  variants: {
    color: {
      primary: 'text-white',
      secondary: 'bg-green-regular text-white hover:bg-green-regular/90',
    },
  },
  defaultVariants: {
    color: 'primary',
  },
})

export function MovieCardButton({
  handleAddToCart,
  totalSelectedMovies,
}: {
  handleAddToCart: () => void
  totalSelectedMovies: number
}) {
  const hasMovies = totalSelectedMovies > 0

  return (
    <Button
      className={button({ color: hasMovies ? 'secondary' : 'primary' })}
      onClick={handleAddToCart}
    >
      <span className="flex gap-[3px] font-normal">
        <Image src={addCartIcon} alt="Carrinho" /> {totalSelectedMovies}
      </span>
      ADICIONAR AO CARRINHO
    </Button>
  )
}
