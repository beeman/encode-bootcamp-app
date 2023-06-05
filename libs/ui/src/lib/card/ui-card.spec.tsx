import { render, screen } from '@testing-library/react'

import { UiCard } from './ui-card'

describe('UiCard', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <UiCard>
        <div>Test</div>
      </UiCard>,
    )

    expect(baseElement).toBeTruthy()
    expect(screen.getByText('Test')).toBeTruthy()
  })
})
