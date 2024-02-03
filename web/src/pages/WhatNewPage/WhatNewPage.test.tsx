import { render } from '@redwoodjs/testing/web'

import WhatNewPage from './WhatNewPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('WhatNewPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<WhatNewPage />)
    }).not.toThrow()
  })
})
