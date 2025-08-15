import '@testing-library/jest-dom/vitest'
import { vi } from 'vitest'
import React from 'react'

// Mock de next/image (renderiza <img>)
vi.mock('next/image', () => ({
  __esModule: true,
  default: (props: any) => React.createElement('img', props),
}))

// Mock de next/navigation (App Router)
vi.mock('next/navigation', () => {
  const push = vi.fn()
  const replace = vi.fn()
  const prefetch = vi.fn()
  const back = vi.fn()
  return {
    __esModule: true,
    useRouter: () => ({ push, replace, prefetch, back }),
    usePathname: () => '/',
    useSearchParams: () => new URLSearchParams(),
  }
})

// Mock de next/link (vira <a>)
vi.mock('next/link', () => ({
  __esModule: true,
  default: ({ href, children, ...rest }: any) =>
    React.createElement('a', { href, ...rest }, children),
}))
