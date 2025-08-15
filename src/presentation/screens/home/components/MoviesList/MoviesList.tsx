'use client'
import { CartMovie } from '@/business/domain/entities/movie'
import { MovieCard } from '../MoviesCard/MovieCard'
import { useStoreCart } from '@/presentation/shared/contexts/StoreCartContext'

export function MoviesList({ movies }: { movies: CartMovie[] }) {
  const { cartMovies, handleIncreaseAmount } = useStoreCart()

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {movies.map((movie) => (
        <MovieCard.Root key={movie.id}>
          <MovieCard.Image src={movie.image} alt={movie.title} />
          <MovieCard.Title>{movie.title}</MovieCard.Title>
          <MovieCard.Price price={movie.price} />
          <MovieCard.Button
            handleAddToCart={() => handleIncreaseAmount(movie)}
            totalSelectedMovies={
              cartMovies?.find((m) => m.id === movie.id)?.amount || 0
            }
          />
        </MovieCard.Root>
      ))}
    </div>
  )
}
