import { CardRowMobileContentGroup } from './CardRowMobileContent'
import { CardRowMobileContentControlGroup } from './CardRowMobileContentControlGroup'
import { CardRowMobileImage } from './CardRowMobileImage'
import { CardRowMobileContentInfoGroup } from './CardRowMobileContentInfoGroup'

function CardRowMobileComponent({ children }: { children: React.ReactNode }) {
  return <div className="flex gap-4">{children}</div>
}

export const CardRowMobile = {
  Root: CardRowMobileComponent,
  Image: CardRowMobileImage,
  InfoGroup: CardRowMobileContentInfoGroup,
  ControlGroup: CardRowMobileContentControlGroup,
  ContentGroup: CardRowMobileContentGroup,
}
