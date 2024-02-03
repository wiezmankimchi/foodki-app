import { render } from '@redwoodjs/testing/web'

import {Textarea} from './Textarea'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('Textarea', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Textarea />)
    }).not.toThrow()
  })
})
