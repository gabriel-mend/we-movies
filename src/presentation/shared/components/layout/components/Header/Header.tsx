import { HeaderCart } from './HeaderCart'
import { HeaderLogo } from './HeaderLogo'

export function Header() {
  return (
    <header className="flex justify-between py-6">
      <HeaderLogo />

      <HeaderCart />
    </header>
  )
}
