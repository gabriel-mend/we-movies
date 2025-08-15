'use client'

import { CartMovie } from '@/business/domain/entities/movie'
import React, { createContext, useContext, useMemo, useState } from 'react'

interface StoreCartContextProps {
  cartMovies?: CartMovie[]
  handleIncreaseAmount: (movie: CartMovie) => void
  cartMoviesCount?: number
  handleDecreaseAmount: (movieId: number) => void
  cartCalculateSubtotalPrice: (amount: number, price: number) => number
  handleRemoveMovieFromCart: (movieId: number) => void
  cartTotal: number
}

export const CreateStoreCartContext =
  createContext<StoreCartContextProps | null>(null)

export interface StoreCartContextValue {
  cartMovies?: CartMovie[]
  children: React.ReactNode
  cartMoviesCount?: number
}

export function StoreCartProvider({ children }: StoreCartContextValue) {
  const [cartMovies, setCartMovies] = useState<CartMovie[]>([])

  const cartMoviesCount = cartMovies.reduce(
    (acc, movie) => acc + movie.amount,
    0
  )

  const cartTotal = useMemo(() => {
    return cartMovies.reduce(
      (acc, movie) =>
        acc + cartCalculateSubtotalPrice(movie.amount, movie.price),
      0
    )
  }, [cartMovies])

  function cartCalculateSubtotalPrice(amount: number, price: number) {
    return amount * price
  }

  function handleIncreaseAmount(movie: CartMovie) {
    const movieIsAlreadyOnCart = cartMovies.some(
      (cartMovie) => cartMovie.id === movie.id
    )
    if (movieIsAlreadyOnCart) {
      setCartMovies((prev) =>
        prev.map((cartMovie) => {
          if (cartMovie.id === movie.id) {
            return {
              ...cartMovie,
              amount: cartMovie.amount + 1,
            }
          }
          return cartMovie
        })
      )

      return
    }

    setCartMovies((prev) => [...prev, { ...movie, amount: 1 }])
  }

  function handleDecreaseAmount(movieId: number) {
    setCartMovies((prev) =>
      prev
        .map((cartMovie) => {
          if (cartMovie.id === movieId) {
            return {
              ...cartMovie,
              amount: cartMovie.amount - 1,
            }
          }

          return cartMovie
        })
        .filter((cartMovie) => cartMovie.amount > 0)
    )
  }

  function handleRemoveMovieFromCart(movieId: number) {
    const cartMoviesWithoutMovie = cartMovies.filter(
      (movie) => movie.id !== movieId
    )
    return setCartMovies(cartMoviesWithoutMovie)
  }

  return (
    <CreateStoreCartContext.Provider
      value={{
        cartMovies,
        handleIncreaseAmount,
        cartMoviesCount,
        handleDecreaseAmount,
        cartCalculateSubtotalPrice,
        cartTotal,
        handleRemoveMovieFromCart,
      }}
    >
      {children}
    </CreateStoreCartContext.Provider>
  )
}

export function useStoreCart() {
  const ctx = useContext(CreateStoreCartContext)
  if (!ctx) throw new Error('useStoreCart não existe provider!')
  return ctx
}
