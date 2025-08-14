import Image from 'next/image'

export function MovieCardImage({
  src,
  alt,
}: Readonly<{ src: string; alt: string }>) {
  return <Image src={src} alt={alt} width={147} height={188} />
}
