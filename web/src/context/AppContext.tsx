import { createContext, useContext, useState } from 'react'
export type GlobalContentType = {
  dark: boolean
  setDark?: (b: boolean) => void
  recipe?: {
    url?: string
    name?: string
    image?: string
    description?: string
    cookTime?: string
    prepTime?: string
    totalTime?: string
    recipeYield?: string
    recipeIngredients?: []
    recipeInstructions?: []
    recipeCategories?: []
    recipeCuisines?: []
    keywords?: []
    notes?: []
  }
  setRecipe?: ({}) => void
}
export const AppContext = createContext<GlobalContentType>({
  dark: false,
  setDark: () => {},
  recipe: {},
  setRecipe: () => {},
})

type ContextProviderProps = {
  children: React.ReactNode
}
export const AppContextProvider = ({ children }: ContextProviderProps) => {
  const [dark, setDark] = useState(false)
  const [recipe, setRecipe] = useState({})
  const value = {
    dark,
    setDark,
    recipe,
    setRecipe,
  }

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}

export const useAppContext = () => useContext(AppContext)
