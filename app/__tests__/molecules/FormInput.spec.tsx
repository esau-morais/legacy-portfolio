import { render, screen } from '@testing-library/react'

import FormInput from '@/components/molecules/FormInput'
import { describe, it } from 'vitest'

describe('<FormInput />', () => {
  it('should render FormInput molecule content correctly', () => {
    render(<FormInput id="any" name="any" label="any" />)

    expect(screen.getByText('any')).toBeInTheDocument()
    expect(screen.getByLabelText('any')).toBeInTheDocument()
  })

  // TODO: expect errors to be shown
})
