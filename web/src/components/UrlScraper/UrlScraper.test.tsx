import { render } from '@redwoodjs/testing/web'

import UrlScraper from './UrlScraper'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('UrlScraper', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<UrlScraper />)
    }).not.toThrow()
  })
})
