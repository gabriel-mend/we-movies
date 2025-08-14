import Image from 'next/image'

export function CardRowMobileImage({
  image,
  title,
}: {
  image: string
  title: string
}) {
  return <Image src={image} alt={title} width={64} height={82} />
}
