import { MovieFactory } from '@/infrastructure/factories/movie-factory'
import { MovieCard } from '@/presentation/screens/home/components'
import { MoviesEmpty } from '@/presentation/screens/home/components/MoviesEmpty/MoviesEmpty'
import { MoviesList } from '@/presentation/screens/home/components/MoviesList/MoviesList'

export default async function Home() {
  const { movieGateway } = await MovieFactory()
  const movies = await movieGateway.findAll()

  if (!movies) {
    return <MoviesEmpty />
  }

  return (
    <MoviesList>
      {movies.map((movie) => (
        <MovieCard.Root key={movie.id}>
          <MovieCard.Image src={movie.image} alt={movie.title} />
          <MovieCard.Title>{movie.title}</MovieCard.Title>
          <MovieCard.Price price={movie.price} />
          <MovieCard.Button />
        </MovieCard.Root>
      ))}
    </MoviesList>
  )
}
