import { MovieGateway } from './movieGateway'
import { Movie } from '@/business/domain/entities/movie'
import { HttpClient } from '@/infrastructure/external/http/http-client'
import { MovieMapper } from './mapper/movie-mapper'
import { MovieDTO } from './dtos/movie-dto'

export class MovieGatewayImpl implements MovieGateway {
  constructor(private readonly api: HttpClient) {}

  async findAll(): Promise<Movie[] | null> {
    try {
      const data = await this.api.get<MovieDTO>('movies')
      if (data.isLeft()) {
        return null
      }
      return MovieMapper.toDomain(data.value)
    } catch (error) {
      return null
    }
  }
}
