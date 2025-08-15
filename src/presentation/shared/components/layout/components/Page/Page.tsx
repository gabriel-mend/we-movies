import { Header } from '../Header/Header'
import { Wrapper } from '../Wrapper/Wrapper'

export function Page({ children }: { children: React.ReactNode }) {
  return (
    <Wrapper>
      <Header />
      {children}
    </Wrapper>
  )
}
