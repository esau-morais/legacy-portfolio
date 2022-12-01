import { render, screen } from '@testing-library/react'

import { Input } from '@/components/atoms'
import { describe, it } from 'vitest'

describe('<Input />', () => {
  it('should render atom correctly', () => {
    render(<Input id="any" name="any" />)

    screen.debug()
  })
})
