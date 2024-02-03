import { render } from '@redwoodjs/testing/web'

import ToggleGroup from './ToggleGroup'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('ToggleGroup', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ToggleGroup />)
    }).not.toThrow()
  })
})
