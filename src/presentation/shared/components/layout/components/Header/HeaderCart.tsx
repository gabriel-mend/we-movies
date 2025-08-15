'use client'
import Image from 'next/image'
import cartIcon from '@public/icons/cart-icon.png'
import Link from 'next/link'
import { useStoreCart } from '@/presentation/shared/contexts/StoreCartContext'

export function HeaderCart() {
  const { cartMoviesCount } = useStoreCart()
  return (
    <Link href="/cart">
      <div className="flex gap-2">
        <div className="flex flex-col justify-center items-end">
          <p className="text-sm font-semibold sm:flex hidden">Meu Carrinho</p>
          <span className="text-xs text-gray-regular">
            {cartMoviesCount} itens
          </span>
        </div>
        <Image src={cartIcon} alt="Carrinho" width={40} height={40} />
      </div>
    </Link>
  )
}
