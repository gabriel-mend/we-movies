interface Props {
  id: number
  title: string
  price: number
  image: string
}

export class Movie {
  constructor(private readonly props: Props) {}

  get id() {
    return this.props.id
  }

  get title() {
    return this.props.title
  }

  get price() {
    return this.props.price
  }
  get image() {
    return this.props.image
  }
}
