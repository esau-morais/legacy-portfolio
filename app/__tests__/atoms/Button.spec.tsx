import { render, screen } from '@testing-library/react'

import { Button, DotIcon } from '@/components/atoms'
import { describe, it } from 'vitest'

describe('<Button />', () => {
  it('should render Button content correctly', () => {
    const { rerender } = render(<Button type="button" />)

    expect(screen.getByRole('button')).toBeInTheDocument()

    rerender(<Button type="button" label="any" />)
    expect(screen.getByText('any')).toBeInTheDocument()
  })

  it('should render a svg when icon is forwarded', () => {
    const { rerender } = render(<Button type="button" label="any" icon={<DotIcon />}/>)

    const buttonIcon = screen.getByTestId('button_icon')

    expect(buttonIcon).toBeInTheDocument()
    expect(buttonIcon).toHaveClass('mr-2')

    rerender(<Button type="button" label="any" />)
    expect(screen.getByTestId('button_icon')).not.toContain(<DotIcon />)
    expect(buttonIcon).not.toHaveClass('mr-2')
  })
  
  it('should render default size and handle its change', () => {
    const { rerender } = render(<Button type="button" />)

    expect(screen.getByRole('button')).toHaveClass('px-9 py-4')

    rerender(<Button type="button" size="small" />)
    expect(screen.getByRole('button')).toHaveClass('px-6 py-2')

    rerender(<Button type="button" size="large" />)
    expect(screen.getByRole('button')).toHaveClass('px-12 py-6')
  })

  it('should render default theme and handle its change', () => {
    const { rerender } = render(<Button type="button" />)

    expect(screen.getByRole('button')).toHaveClass('bg-gradient-to-r from-dark-blue via-blue to-light-blue')

    rerender(<Button type="button" theme="success" />)
    expect(screen.getByRole('button')).toHaveClass('bg-green-500')

    rerender(<Button type="button" theme="danger" />)
    expect(screen.getByRole('button')).toHaveClass('bg-red-500')
  })
})
