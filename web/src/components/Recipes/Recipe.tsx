import { useState } from 'react'
import { Link, routes } from '@redwoodjs/router'
import { Separator } from '@radix-ui/react-separator'
import { useAppContext } from 'src/context/AppContext'

const notes = []

export const Recipe = () => {
  const [favorite, setFavorite] = useState(false)
  const { recipe } = useAppContext()

  const RecipeNavBar = () => {
    return (
      <div className=" my-4 flex w-1/2 flex-row items-center justify-around gap-2">
        <Link
          to={routes.cookMode()}
          className="inline-block cursor-pointer appearance-none rounded-lg border-0 bg-orange-600 px-2 py-2 font-sans font-semibold leading-5 text-orange-50 shadow transition-all duration-150 ease-in-out"
        >
          Cook this
        </Link>
        <button
          className=" text-orange-700 dark:text-amber-500"
          onClick={() => setFavorite(!favorite)}
        >
          {favorite ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-8 w-8"
            >
              <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-8 w-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
              />
            </svg>
          )}
        </button>
        <button className=" text-orange-700 dark:text-amber-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125"
            />
          </svg>
        </button>
        <button className=" text-orange-700 dark:text-amber-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 8.25H7.5a2.25 2.25 0 0 0-2.25 2.25v9a2.25 2.25 0 0 0 2.25 2.25h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25H15m0-3-3-3m0 0-3 3m3-3V15"
            />
          </svg>
        </button>
        <button className=" text-orange-700 dark:text-amber-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </button>
      </div>
    )
  }

  return (
    <div className="mx-auto w-3/4 pb-20 text-orange-950 dark:text-orange-400">
      <div>
        <h1 className="text-3xl font-extrabold text-orange-700 dark:text-orange-300 md:text-5xl">
          {recipe.name}
        </h1>
      </div>
      <RecipeNavBar />
      <div className=" font-serif text-base tracking-wide">
        <div className="description">{recipe.description}</div>
        <div className=" my-4 flex items-center font-sans text-2xl font-semibold tracking-wider text-orange-950 after:m-3  after:flex-1 after:bg-amber-500 after:p-[1px] dark:text-orange-300">
          Ingredients
        </div>
        <div>
          <ul>
            {recipe.recipeIngredients.map((item, i) => {
              return <li key={i}>{item}</li>
            })}
          </ul>
        </div>
        <div className=" my-4 flex items-center font-sans text-2xl font-semibold tracking-wider text-orange-950 after:m-3  after:flex-1 after:bg-amber-500 after:p-[1px] dark:text-orange-300">
          Instructions
        </div>
        {recipe.recipeInstructions.map((item, i) => {
          return (
            <div key={i}>
              <div className=" a my-4 flex items-center font-sans text-lg font-semibold tracking-wider text-orange-950 dark:text-orange-300">
                Step {i + 1}
              </div>
              <div>{item}</div>
            </div>
          )
        })}
        <div className=" my-4 flex items-center font-sans text-2xl font-semibold tracking-wider text-orange-950 after:m-3  after:flex-1 after:bg-amber-500 after:p-[1px] dark:text-orange-300">
          Details
        </div>
        <div className=" a my-4 flex items-center font-sans text-lg font-semibold tracking-wider text-orange-950 dark:text-orange-300">
          Source
        </div>
        <div>{recipe.url}</div>
        <div className="mx-20 mt-8 flex flex-row items-center justify-between align-middle">
          <div className=" flex flex-col items-center">
            <div className="font-sans text-lg font-semibold tracking-wider text-orange-950 dark:text-orange-300">
              Serve
            </div>
            <div>{recipe.recipeYield}</div>
          </div>
          <div className="flex flex-col border-l border-amber-900">
            <span>&nbsp;</span>
            <span>&nbsp;</span>
          </div>
          <div className="flex flex-col items-center ">
            <div className="font-sans text-lg font-semibold tracking-wider text-orange-950 dark:text-orange-300">
              Prep Time
            </div>
            <div>{recipe.prepTime}</div>
          </div>
          <div className="flex flex-col border-l border-amber-900">
            <span>&nbsp;</span>
            <span>&nbsp;</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="font-sans text-lg font-semibold tracking-wider text-orange-950 dark:text-orange-300">
              Cook Time
            </div>
            <div>{recipe.cookTime}</div>
          </div>
          <div className="flex flex-col border-l border-amber-900">
            <span>&nbsp;</span>
            <span>&nbsp;</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="font-sans text-lg font-semibold tracking-wider text-orange-950 dark:text-orange-300">
              Total Time
            </div>
            <div>{recipe.totalTime}</div>
          </div>
        </div>
        <div className=" my-4 flex items-center font-sans text-2xl font-semibold tracking-wider text-orange-950 after:m-3  after:flex-1 after:bg-amber-500 after:p-[1px] dark:text-orange-300">
          Notes
        </div>
        <div>
          {notes.length > 0 ? (
            <ul>
              {notes.map((item) => {
                return <li key={item?.id}>{item?.note}</li>
              })}
            </ul>
          ) : (
            'No notes for this recipe yet.'
          )}
        </div>
      </div>
    </div>
  )
}
