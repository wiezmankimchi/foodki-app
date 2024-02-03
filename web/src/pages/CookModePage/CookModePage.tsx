import { Link, routes } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web'
import { useEffect } from 'react'
import { useAppContext } from 'src/context/AppContext'
import { demoRecipe } from 'src/context/demoRecipe'

const CookModePage = () => {
  const { recipe, setRecipe } = useAppContext()

  return (
    <>
      <Metadata title="CookMode" description="CookMode page" />

      <div className="mx-8 my-8 grid grid-cols-2 gap-10 font-noto text-amber-900">
        <div>
          <div className="text-wrap text-5xl font-bold">{recipe?.name}</div>
          <div className="mt-4 text-lg text-orange-400">
            {recipe?.recipeInstructions.length} steps
          </div>
          <div className="mt-8 text-2xl">Ingedients</div>
          <div>
            <ul>
              {recipe.recipeIngredients.map((item, i) => {
                return <li key={i}>{item}</li>
              })}
            </ul>
          </div>
          <div>Notes</div>
          <div>
            {recipe.notes.length > 0 ? (
              <ul>
                {recipe.notes.map((item, i) => {
                  return <li key={i}>{item}</li>
                })}
              </ul>
            ) : (
              'No notes for this recipe yet.'
            )}
          </div>
        </div>
        <div>
          <div>Steps</div>
          <div>
            {recipe.recipeInstructions.map((item, i) => {
              return (
                <div key={i}>
                  <div className=" a font-sans my-4 flex items-center text-lg font-semibold tracking-wider text-orange-950 dark:text-orange-300">
                    Step {i + 1}
                  </div>
                  <div>{item}</div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </>
  )
}

export default CookModePage
