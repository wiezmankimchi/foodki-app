import { render } from '@redwoodjs/testing/web'

import ScrollTopButton from './ScrollTopButton'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('ScrollTopButton', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ScrollTopButton />)
    }).not.toThrow()
  })
})
