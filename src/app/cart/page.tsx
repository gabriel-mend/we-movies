import { MovieFactory } from '@/infrastructure/factories/movie-factory'
import { CartList } from '@/presentation/screens/cart/components'
export default async function CartPage() {
  const { movieGateway } = await MovieFactory()
  const movies = await movieGateway.findAll()
  return <CartList movies={JSON.parse(JSON.stringify(movies))} />
}
