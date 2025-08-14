import { Movie } from '@/business/domain/entities/movie'
import { Either } from '@/infrastructure/shared/either'

export interface MovieGateway {
  findAll(): Promise<Either<Error, Movie[]>>
}
