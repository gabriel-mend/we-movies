export function MovieCardPrice({ price }: Readonly<{ price: number }>) {
  return (
    <span className="text-md font-bold text-gray-dark leading-none">
      {price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
    </span>
  )
}
