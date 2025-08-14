import Image from 'next/image'
import loadingIcon from '@public/icons/load-spinner.svg'
export default function Loading() {
  return (
    <div className="flex justify-center p-10">
      <Image
        src={loadingIcon}
        alt="Carregando..."
        width={62}
        height={62}
        className="animate-spin"
      />
    </div>
  )
}
