import { MovieFactory } from '@/infrastructure/factories/movie-factory'
import { MoviesList } from '@/presentation/screens/home/components'

export default async function Home() {
  const { movieGateway } = await MovieFactory()
  const movies = await movieGateway.findAll()

  if (!movies) {
    throw new Error('Não foi possível carregar os filmes.')
  }

  return <MoviesList movies={JSON.parse(JSON.stringify(movies))} />
}
