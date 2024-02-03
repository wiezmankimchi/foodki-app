import { Metadata } from '@redwoodjs/web'
import { useEffect } from 'react'
import { Recipe } from 'src/components/Recipes/Recipe'
import { useAppContext } from 'src/context/AppContext'
import { demoRecipe } from 'src/context/demoRecipe'

const RecipePage = () => {
  const { recipe, setRecipe } = useAppContext()

  return (
    <>
      <Metadata title="Recipe" description="Recipe page" />
      <Recipe />
    </>
  )
}

export default RecipePage
