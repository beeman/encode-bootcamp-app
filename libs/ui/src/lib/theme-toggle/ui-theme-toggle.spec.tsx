import { render } from '@testing-library/react'

import { UiThemeToggle } from './ui-theme-toggle'

describe('UiThemeToggle', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<UiThemeToggle />)

    expect(baseElement).toBeTruthy()
  })
})
