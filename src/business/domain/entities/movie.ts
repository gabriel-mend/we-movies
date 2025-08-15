export interface Movie {
  id: number
  title: string
  price: number
  image: string
}

export interface CartMovie extends Movie {
  amount: number
}
