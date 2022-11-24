import type { ReactNode } from 'react'
import { unstable_HistoryRouter as HistoryRouter } from 'react-router-dom'

import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { Redirect } from '@/components/atoms'
import { createBrowserHistory } from 'history'
import { describe, it, expect, vi } from 'vitest'

const userAction = userEvent.setup()
const history = createBrowserHistory({ window })

const Wrapper = ({ children }: { children: ReactNode }) =>
  <HistoryRouter history={history}>
    {children}
  </HistoryRouter>

describe('<Redirect />', () => {
  it('should render Redirect atom content correctly', () => {
    render(
      <Wrapper>
        <Redirect label="any" to="/any" />
      </Wrapper>
    )

    expect(screen.getByText('any')).toBeInTheDocument()
    expect(screen.getByRole('link').closest('a')).toHaveAttribute('href', '/any')
  })

  it('should render Redirect atom direction icons correctly', () => {
    const { rerender } = render(
      <Wrapper>
        <Redirect label="any" to="/any" direction="east" />
      </Wrapper>
    )
    
    expect(screen.getByTestId('navigation_arrow')).toBeInTheDocument()
    expect(screen.getByTestId('navigation_arrow')).toHaveTextContent("→")

    rerender(
      <Wrapper>
        <Redirect label="any" to="/any" direction="west" />
      </Wrapper>
    )
    
    expect(screen.getByTestId('navigation_arrow')).toBeInTheDocument()
    expect(screen.getByTestId('navigation_arrow')).toHaveTextContent("←")

    rerender(
      <Wrapper>
        <Redirect label="any" to="/any" direction="northeast" />
      </Wrapper>
    )
    
    expect(screen.getByTestId('navigation_arrow')).toBeInTheDocument()
    expect(screen.getByTestId('navigation_arrow')).toHaveTextContent("↗")
  })

  it('should redirect to an existing route', async () => {
    vi.spyOn(history, 'push')

    render(
      <Wrapper>
        <Redirect label="any" to="/any" />
      </Wrapper>
    )

    await userAction.click(screen.getByText('any'))
    expect(history.push).toBeCalled()
  })
})
