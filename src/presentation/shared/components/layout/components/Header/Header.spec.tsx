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
})
