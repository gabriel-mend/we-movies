import { MovieFactory } from '@/infrastructure/factories/movie-factory'
import { CardListHeader } from './CardListHeader'
import { CardRow } from '../CardRow/CardRow'
import { CardRowActions } from '../CardRow/CardRowActions'
import { CardListFooter } from './CardListFooter'

export async function CartList({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const { movieGateway } = await MovieFactory()
  const movies = await movieGateway.findAll()
  return (
    <div className="flex flex-col gap-6 bg-white text-secondary rounded-sm p-6">
      <CardListHeader />
      <div className="flex flex-col gap-6">
        {movies?.map((movie) => (
          <CardRow.Root key={movie.id}>
            <CardRow.Info
              title={movie.title}
              price={movie.price}
              image={movie.image}
            />
            <CardRow.Control />
            <CardRow.SubTotal price={movie.price} />
            <CardRow.Actions />
          </CardRow.Root>
        ))}
      </div>
      <CardListFooter price={9.9} />
    </div>
  )
}
