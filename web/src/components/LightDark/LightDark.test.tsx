import { render } from '@redwoodjs/testing/web'

import LightDark from './LightDark'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('LightDark', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<LightDark />)
    }).not.toThrow()
  })
})
