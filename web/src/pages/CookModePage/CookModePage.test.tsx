import { render } from '@redwoodjs/testing/web'

import CookModePage from './CookModePage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('CookModePage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<CookModePage />)
    }).not.toThrow()
  })
})
