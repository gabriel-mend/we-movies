import { Movie } from '@/business/domain/entities/movie'
import { MovieDTO } from '../dtos/movie-dto'

export class MovieMapper {
  static toDomain(data: MovieDTO): Movie[] {
    return data.products.map((product) => {
      return new Movie({
        id: product.id,
        title: product.title,
        price: product.price,
        image: product.image,
      })
    })
  }
}
