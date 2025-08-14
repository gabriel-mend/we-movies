import { MovieFactory } from '@/infrastructure/factories/movie-factory'
import {
  MovieCard,
  MoviesEmpty,
  MoviesList,
} from '@/presentation/screens/home/components'

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
