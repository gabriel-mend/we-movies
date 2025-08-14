'use client'

import { CardListHeader } from './CardListHeader'
import { CardRow } from '../CardRow/CardRow'
import { CardListFooter } from './CardListFooter'
import { useIsMobile } from '@/presentation/hooks/ui/useIsMobile'
import { CardRowMobile } from '../CardRowMobile/CardRowMobile'
import { CartMoviesEmpty } from '../CartMoviesEmpty/CartMoviesEmpty'

export function CartList({ movies }: any) {
  const isMobile = useIsMobile(600)
  const isNotMobile = !isMobile
  return <CartMoviesEmpty />
  return (
    <div className="flex flex-col gap-6 bg-white text-secondary rounded-sm p-4 sm:p-6">
      <CardListHeader />
      <div className="flex flex-col gap-6">
        {isMobile &&
          movies?.map((movie) => (
            <CardRowMobile.Root key={movie.props.id}>
              <CardRowMobile.Image
                image={movie.props.image}
                title={movie.props.title}
              />
              <CardRowMobile.Content>
                <CardRowMobile.Info
                  title={movie.props.title}
                  price={movie.props.price}
                />
                <CardRowMobile.Control>
                  <CardRow.Control />
                  <CardRow.SubTotal price={movie.props.price} />
                </CardRowMobile.Control>
              </CardRowMobile.Content>
            </CardRowMobile.Root>
          ))}

        {isNotMobile &&
          movies?.map((movie) => (
            <CardRow.Root key={movie.props.id}>
              <CardRow.Info
                title={movie.props.title}
                price={movie.props.price}
                image={movie.props.image}
              />
              <CardRow.Control />
              <CardRow.SubTotal price={movie.props.price} />
              <CardRow.Actions />
            </CardRow.Root>
          ))}
      </div>
      <CardListFooter price={9.9} />
    </div>
  )
}
