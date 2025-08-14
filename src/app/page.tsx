import { MovieFactory } from '@/infrastructure/factories/movie-factory'
import { Page } from '@/presentation/shared/layout'

export default async function Home() {
  const { movieGateway } = await MovieFactory()
  const movies = await movieGateway.findAll()

  return (
    <Page>
      <h1 className="text-2xl font-bold">Home Page</h1>
      {movies.value.map((movie) => (
        <h1>{movie.title}</h1>
      ))}
    </Page>
  )
}
