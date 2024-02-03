import { Link, routes } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web'

const WhatNewPage = () => {
  return (
    <>
      <Metadata title="WhatNew" description="WhatNew page" />

      <h1>WhatNewPage</h1>
      <p>
        Find me in <code>./web/src/pages/WhatNewPage/WhatNewPage.tsx</code>
      </p>
      <p>
        My default route is named <code>whatNew</code>, link to me with `
        <Link to={routes.whatNew()}>WhatNew</Link>`
      </p>
    </>
  )
}

export default WhatNewPage
