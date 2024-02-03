// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Router, Route, Set } from '@redwoodjs/router'

import MainLayout from './layouts/MainLayout/MainLayout'

const Routes = () => {
  return (
    <Router>
      <Set wrap={MainLayout}>
        <Route path="/new-recipe" page={NewRecipePage} name="newRecipe" />
        <Route path="/recipe" page={RecipePage} name="recipe" />
        <Route path="/grocery-list" page={GroceryListPage} name="groceryList" />
        <Route path="/collection" page={CollectionPage} name="collection" />
        <Route path="/import" page={ImportPage} name="import" />
        <Route path="/cook-mode" page={CookModePage} name="cookMode" />
        <Route path="/what-new" page={WhatNewPage} name="whatNew" />
        <Route path="/" page={HomePage} name="home" />
      </Set>
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
