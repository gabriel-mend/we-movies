import { httpClientAdapter } from '../external/http/http-client-adapter'
import { MovieGatewayImpl } from './../modules/movie/movieGatewayImpl'

export function MovieFactory() {
  const movieGateway = new MovieGatewayImpl(httpClientAdapter)
  return { movieGateway }
}
