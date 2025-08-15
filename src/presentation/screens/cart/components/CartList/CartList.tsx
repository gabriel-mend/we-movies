'use client'
import { CardListHeader } from './CardListHeader'
import { CardRow } from '../CardRow/CardRow'
import { CardListFooter } from './CardListFooter'
import { useIsMobile } from '@/presentation/shared/hooks/ui/useIsMobile'
import { CardRowMobile } from '../CardRowMobile/CardRowMobile'
import { useStoreCart } from '@/presentation/shared/contexts/StoreCartContext'
import { CartMoviesEmpty } from '../CartMoviesEmpty/CartMoviesEmpty'
import { useState } from 'react'
import { CartMoviesSuccess } from '../CartMoviesSuccess/CartMoviesSucess'

export function CartList() {
  const {
    cartMovies,
    handleIncreaseAmount,
    handleDecreaseAmount,
    cartCalculateSubtotalPrice,
    cartTotal,
    handleRemoveMovieFromCart,
  } = useStoreCart()
  const [isSuccess, setisSuccess] = useState(false)
  const isMobile = useIsMobile(500)

  const isCartEmpty = !cartMovies || cartMovies.length === 0

  if (isCartEmpty) {
    return <CartMoviesEmpty />
  }

  if (isSuccess) {
    return <CartMoviesSuccess />
  }

  return (
    <div className="flex flex-col gap-6 bg-white text-secondary rounded-sm p-4 sm:p-6">
      <CardListHeader />
      <div className="flex flex-col gap-6">
        {!isMobile
          ? cartMovies?.map((movie) => (
              <CardRow.Root key={movie.id}>
                <CardRow.Info
                  title={movie.title}
                  price={movie.price}
                  image={movie.image}
                />
                <CardRow.Control
                  amount={movie.amount}
                  handleIncrement={() => handleIncreaseAmount(movie)}
                  handleDecrement={() => handleDecreaseAmount(movie.id)}
                />
                <CardRow.SubTotal
                  price={cartCalculateSubtotalPrice(movie.price, movie.amount)}
                />
                <CardRow.Actions
                  handleRemoveMovieFromCart={() =>
                    handleRemoveMovieFromCart(movie.id)
                  }
                />
              </CardRow.Root>
            ))
          : cartMovies?.map((movie) => (
              <CardRowMobile.Root key={movie.id}>
                <CardRowMobile.Image image={movie.image} title={movie.title} />
                <CardRowMobile.ContentGroup>
                  <CardRowMobile.InfoGroup
                    title={movie.title}
                    price={movie.price}
                    handleRemoveMovieFromCart={() =>
                      handleRemoveMovieFromCart(movie.id)
                    }
                  />
                  <CardRowMobile.ControlGroup>
                    <CardRow.Control
                      amount={movie.amount}
                      handleIncrement={() => handleIncreaseAmount(movie)}
                      handleDecrement={() => handleDecreaseAmount(movie.id)}
                    />
                    <CardRow.SubTotal
                      price={cartCalculateSubtotalPrice(
                        movie.price,
                        movie.amount
                      )}
                    />
                  </CardRowMobile.ControlGroup>
                </CardRowMobile.ContentGroup>
              </CardRowMobile.Root>
            ))}
      </div>
      <CardListFooter
        price={cartTotal}
        handleCartSuccess={() => setisSuccess(true)}
      />
    </div>
  )
}
