'use client'
import Link from 'next/link'

export default function Error() {
  return (
    <div className="p-6 text-center">
      <h2 className="text-xl font-semibold">
        Não foi possível carregar os filmes.
      </h2>
      <Link href="/">Recarregue a página</Link>
    </div>
  )
}
