import { CardRowActions } from './CardRowActions'
import { CardRowControl } from './CardRowControl'
import { CardRowInfo } from './CardRowInfo'
import { CardRowSubTotal } from './CardRowSubTotal'

function CardRowComponent({ children }: { children: React.ReactNode }) {
  return <div className="flex items-center w-full">{children}</div>
}

export const CardRow = {
  Root: CardRowComponent,
  Info: CardRowInfo,
  Control: CardRowControl,
  SubTotal: CardRowSubTotal,
  Actions: CardRowActions,
}
