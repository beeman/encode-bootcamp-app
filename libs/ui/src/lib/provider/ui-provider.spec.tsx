import { render } from '@testing-library/react'

import { UiProvider } from './ui-provider'

describe('UiProvider', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <UiProvider>
        <div>Test</div>
      </UiProvider>,
    )
    expect(baseElement).toBeTruthy()
  })
})
