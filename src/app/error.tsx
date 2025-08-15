'use client'
export default function Error({
  error,
  reset,
}: {
  error: Error
  reset: () => void
}) {
  return (
    <div className="p-6 text-center">
      <h2 className="text-xl font-semibold">
        Não foi possível carregar os filmes.
      </h2>
      <button onClick={reset} className="mt-4 rounded-lg px-4 py-2 border">
        Tentar novamente
      </button>
    </div>
  )
}
