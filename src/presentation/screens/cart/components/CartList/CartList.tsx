// 'use client'

import { MovieFactory } from '@/infrastructure/factories/movie-factory'
import { CardListHeader } from './CardListHeader'
import { CardRow } from '../CardRow/CardRow'
import { CardListFooter } from './CardListFooter'
import { useIsMobile } from '@/presentation/hooks/ui/useIsMobile'
import { CardRowMobile } from '../CardRowMobile/CardRowMobile'

export async function CartList({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const { movieGateway } = await MovieFactory()
  const movies = await movieGateway.findAll()
  // const isMobile = useIsMobile()
  return (
    <div className="flex flex-col gap-6 bg-white text-secondary rounded-sm p-4 sm:p-6">
      <CardListHeader />
      <div className="flex flex-col gap-6">
        {movies?.map((movie) => {
          return (
            <CardRowMobile.Root key={movie.id}>
              <CardRowMobile.Image image={movie.image} title={movie.title} />
              <CardRowMobile.Content>
                <CardRowMobile.Info title={movie.title} price={movie.price} />
                <CardRowMobile.Control>
                  <CardRow.Control />
                  <CardRow.SubTotal price={movie.price} />
                </CardRowMobile.Control>
              </CardRowMobile.Content>
            </CardRowMobile.Root>
            // <CardRow.Root key={movie.id}>
            //   <CardRow.Info
            //     title={movie.title}
            //     price={movie.price}
            //     image={movie.image}
            //   />
            //   <CardRow.Control />
            //   <CardRow.SubTotal price={movie.price} />
            //   <CardRow.Actions />
            // </CardRow.Root>
          )
        })}
      </div>
      <CardListFooter price={9.9} />
    </div>
  )
}
