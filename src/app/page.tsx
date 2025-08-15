import { MovieFactory } from '@/infrastructure/factories/movie-factory'
import { MoviesList } from '@/presentation/screens/home/components'

export default async function Home() {
  const { movieGateway } = await MovieFactory()
  const movies = await movieGateway.findAll()

  return <MoviesList movies={JSON.parse(JSON.stringify(movies))} />
}
