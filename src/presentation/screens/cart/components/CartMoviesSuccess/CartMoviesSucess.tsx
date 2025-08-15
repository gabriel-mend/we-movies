import { Button } from '@/presentation/external/shadcn/ui/button'
import { ContentInfo } from '@/presentation/shared/components/layout'
import { useStoreCart } from '@/presentation/shared/contexts/StoreCartContext'
import successIcon from '@public/images/success-icon.svg'
import Image from 'next/image'

export function CartMoviesSuccess() {
  const { handleClearCart } = useStoreCart()
  return (
    <ContentInfo title="Compra realizada com sucesso!">
      <div className="flex flex-col items-center justify-center my-6  ">
        <Image src={successIcon} alt="" width={178} height={264} />
      </div>
      <Button
        className="w-[173px] h-[40px] text-white font-bold text-xs cursor-pointer rounded-sm"
        onClick={handleClearCart}
      >
        VOLTAR
      </Button>
    </ContentInfo>
  )
}
