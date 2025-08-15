import { CardRowMobileContent } from './CardRowMobileContent'
import { CardRowMobileContentControl } from './CardRowMobileContentControl'
import { CardRowMobileImage } from './CardRowMobileImage'
import { CardRowMobileContentInfo } from './CardRowMobileContentInfo'

function CardRowMobileComponent({ children }: { children: React.ReactNode }) {
  return <div className="flex gap-4">{children}</div>
}

export const CardRowMobile = {
  Root: CardRowMobileComponent,
  Image: CardRowMobileImage,
  Info: CardRowMobileContentInfo,
  Control: CardRowMobileContentControl,
  Content: CardRowMobileContent,
}
