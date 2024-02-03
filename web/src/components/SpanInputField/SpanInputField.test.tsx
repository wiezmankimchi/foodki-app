import { render } from '@redwoodjs/testing/web'

import SpanInputField from './SpanInputField'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('SpanInputField', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<SpanInputField />)
    }).not.toThrow()
  })
})
