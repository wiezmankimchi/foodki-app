import { Link, routes } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web'

const GroceryListPage = () => {
  return (
    <>
      <Metadata title="GroceryList" description="GroceryList page" />

      <h1>GroceryListPage</h1>
      <p>
        Find me in{' '}
        <code>./web/src/pages/GroceryListPage/GroceryListPage.tsx</code>
      </p>
      <p>
        My default route is named <code>groceryList</code>, link to me with `
        <Link to={routes.groceryList()}>GroceryList</Link>`
      </p>
    </>
  )
}

export default GroceryListPage
