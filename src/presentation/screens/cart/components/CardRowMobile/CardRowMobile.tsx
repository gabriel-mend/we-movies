import { CardRowMobileContent } from './CardRowMobileContent'
import { CardRowMobileControl } from './CardRowMobileControl'
import { CardRowMobileImage } from './CardRowMobileImage'
import { CardRowMobileInfo } from './CardRowMobileInfo'

function CardRowMobileComponent({ children }: { children: React.ReactNode }) {
  return <div className="flex gap-4">{children}</div>
}

export const CardRowMobile = {
  Root: CardRowMobileComponent,
  Image: CardRowMobileImage,
  Info: CardRowMobileInfo,
  Control: CardRowMobileControl,
  Content: CardRowMobileContent,
}
