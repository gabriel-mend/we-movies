import { Either } from '@/infrastructure/shared/either'

export interface HttpClient {
  get<Result>(url: string, params?: object): Promise<Either<Error, Result>>
}
