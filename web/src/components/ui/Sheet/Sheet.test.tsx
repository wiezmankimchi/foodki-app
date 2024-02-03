import { render } from '@redwoodjs/testing/web'

import {Sheet} from './Sheet'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('Sheet', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Sheet />)
    }).not.toThrow()
  })
})
