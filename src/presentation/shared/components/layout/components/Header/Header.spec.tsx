'use client'
import { render, screen } from '@testing-library/react'
import { vi } from 'vitest'
import { Header } from './Header'

vi.mock('@/presentation/shared/contexts/StoreCartContext', () => ({
  useStoreCart: () => ({}),
}))

describe('Component <Header />', () => {
  it('should render a Logo', async () => {
    render(<Header />)
    const logo = await screen.findByText(/wemovies/i)
    expect(logo).toBeInTheDocument()
  })

  it('should render a cart link', async () => {
    render(<Header />)
    const link = await screen.findByRole('link', { name: /carrinho|cart/i })
    expect(link).toBeInTheDocument()
  })
})
