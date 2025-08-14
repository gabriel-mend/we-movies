import { Either, left, right } from '@/infrastructure/shared/either'
import { MovieGateway } from './movieGateway'
import { Movie } from '@/business/domain/entities/movie'
import { HttpClient } from '@/infrastructure/external/http/http-client'
import { MovieMapper } from './mapper/movie-mapper'
import { MovieDTO } from './dtos/movie-dto'

export class MovieGatewayImpl implements MovieGateway {
  constructor(private readonly api: HttpClient) {}

  async findAll(): Promise<Either<Error, Movie[]>> {
    try {
      const data = await this.api.get<MovieDTO>('movies')
      if (data.isLeft()) {
        return left(new Error(data.value.message))
      }
      return right(MovieMapper.toDomain(data.value))
    } catch (error) {
      return left(new Error('Ocorreu um na listagem dos filmes.'))
    }
  }
}
