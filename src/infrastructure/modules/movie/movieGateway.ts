import { Movie } from '@/business/domain/entities/movie'

export interface MovieGateway {
  findAll(): Promise<Movie[] | null>
}
