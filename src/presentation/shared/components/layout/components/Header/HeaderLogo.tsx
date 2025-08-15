import Link from 'next/link'

export function HeaderLogo() {
  return (
    <Link href="/">
      <h1 className="text-[20px] font-bold">WeMovies</h1>
    </Link>
  )
}
