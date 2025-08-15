'use client'

import { CartMovie } from '@/business/domain/entities/movie'
import { redirect } from 'next/navigation'
import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react'

interface StoreCartContextProps {
  cartMovies: CartMovie[]
  handleIncreaseAmount: (movie: CartMovie) => void
  cartCounterMovies: number
  handleDecreaseAmount: (movieId: number) => void
  cartCalculateSubtotalPrice: (amount: number, price: number) => number
  handleRemoveMovieFromCart: (movieId: number) => void
  cartTotal: number
  handleClearCart: () => void
}

export const CreateStoreCartContext =
  createContext<StoreCartContextProps | null>(null)

export interface StoreCartContextValue {
  children: React.ReactNode
}

export function StoreCartProvider({ children }: StoreCartContextValue) {
  const [cartMovies, setCartMovies] = useState<CartMovie[]>([])

  const cartCounterMovies = cartMovies.reduce(
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
      const cartMoviesWithNewMovie = cartMovies.map((cartMovie) => {
        if (cartMovie.id === movie.id) {
          return {
            ...cartMovie,
            amount: cartMovie.amount + 1,
          }
        }
        return cartMovie
      })
      setCartMovies(cartMoviesWithNewMovie)
      localStorage.setItem('cartMovies', JSON.stringify(cartMoviesWithNewMovie))
      return
    }

    const cartMoviesWithNewMovie = [...cartMovies, { ...movie, amount: 1 }]

    setCartMovies(cartMoviesWithNewMovie)
    localStorage.setItem('cartMovies', JSON.stringify(cartMoviesWithNewMovie))
  }

  function handleDecreaseAmount(movieId: number) {
    const cartMoviesDecreaseAmount = cartMovies
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
    setCartMovies(cartMoviesDecreaseAmount)
    localStorage.setItem('cartMovies', JSON.stringify(cartMoviesDecreaseAmount))
  }

  function handleRemoveMovieFromCart(movieId: number) {
    const cartMoviesWithoutMovie = cartMovies.filter(
      (movie) => movie.id !== movieId
    )
    localStorage.setItem('cartMovies', JSON.stringify(cartMoviesWithoutMovie))
    return setCartMovies(cartMoviesWithoutMovie)
  }

  function handleClearCart() {
    localStorage.removeItem('cartMovies')
    setCartMovies([])
    redirect('/')
  }

  useEffect(() => {
    const storedCartMovies = localStorage.getItem('cartMovies')
    if (storedCartMovies) {
      setCartMovies(JSON.parse(storedCartMovies))
    }
  }, [])

  return (
    <CreateStoreCartContext.Provider
      value={{
        cartMovies,
        handleIncreaseAmount,
        cartCounterMovies,
        handleDecreaseAmount,
        cartCalculateSubtotalPrice,
        cartTotal,
        handleRemoveMovieFromCart,
        handleClearCart,
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
