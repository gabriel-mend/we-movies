import { Either, left, right } from '@/infrastructure/shared/either'
import { HttpClient } from './http-client'

class HttpClientAdapter implements HttpClient {
  private readonly baseURL: string

  constructor() {
    if (!process.env.API_URL) {
      throw new Error('Não foi encontrado a variável API_URL')
    }
    this.baseURL = process.env.API_URL
  }

  async get<Result>(
    url: string,
    params?: object
  ): Promise<Either<Error, Result>> {
    try {
      const response = await fetch(`${this.baseURL}/${url}`, {
        method: 'GET',
        ...params,
      })
      const data: Result = await response.json()
      return right(data)
    } catch (error) {
      return left(new Error('Ocorreu um erro interno.'))
    }
  }
}

export const httpClientAdapter = new HttpClientAdapter()
