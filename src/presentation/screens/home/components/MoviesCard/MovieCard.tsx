import { MovieCardButton } from './MovieCardButton'
import { MovieCardTitle } from './MovieCardTitle'
import { MovieCardPrice } from './MovieCardPrice'
import { MovieCardImage } from './MovieCardImage'

function MovieCardComponent({
  children,
  ...rest
}: React.HTMLAttributes<HTMLDivElement> & { children?: React.ReactNode }) {
  return (
    <div className="p-4 bg-white w-full h-full rounded-sm">
      <div className="flex flex-col items-center gap-2" {...rest}>
        {children}
      </div>
    </div>
  )
}

export const MovieCard = {
  Root: MovieCardComponent,
  Button: MovieCardButton,
  Title: MovieCardTitle,
  Price: MovieCardPrice,
  Image: MovieCardImage,
}
