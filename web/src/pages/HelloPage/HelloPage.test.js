import { render } from '@redwoodjs/testing'

import HelloPage from './HelloPage'

describe('HelloPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<HelloPage />)
    }).not.toThrow()
  })
})
