import { useState } from 'react'

import getRecipeData from '@dimfu/recipe-scraper'

import { FieldError, Form, Label, Submit, TextField } from '@redwoodjs/forms'

// // enter a supported recipe url as a parameter - returns a promise
// async function someAsyncFunc() {

//   let recipe = await rs("some.recipe.url");

// }

const UrlScraper = () => {
  const [recipe, setRecipe] = useState({
    url: '',
    name: '',
    description: '',
    image: '',
    cookTime: '',
    prepTime: '',
    recipeIngredients: [],
    recipeInstructions: [],
    recipeYield: '',
    totalTime: '',
    keywords: [],
  })

  async function scaper(url) {
    const recipe = await getRecipeData(url)
    setRecipe(recipe)
    console.log(recipe)
  }

  const onSubmit = async (data) => {
    scaper(data.url)
    console.log(data.url)
  }
  return (
    <>
      <div className=" -mt-10 flex flex-col items-center justify-center">
        <div>
          <h1 className="text-4xl font-bold  text-amber-800 dark:text-amber-600 sm:text-3xl">
            Import Recipe
          </h1>
        </div>
        <div className=" mx-2 mb-2 w-full bg-orange-50 p-5 dark:bg-amber-800 dark:text-amber-800 md:w-3/4">
          <div className="flow-root rounded-lg border border-orange-500 py-3 shadow-sm dark:border-orange-500">
            <Form onSubmit={onSubmit} className="w-full">
              <div className="mb-6 md:flex md:items-center">
                <div className={'md:w-1/3'}>
                  <Label
                    name="url"
                    className="mx-1 mb-1 block pr-4 text-lg font-bold text-amber-800 dark:text-amber-600 md:mb-0 md:text-right"
                  >
                    URL
                  </Label>
                </div>
                <div className="mx-2 md:w-2/3 ">
                  <TextField
                    name="url"
                    errorClassName="input error"
                    validation={{ required: true }}
                    className="leading-wider w-full appearance-none rounded border border-orange-200 bg-orange-50 px-4 py-2 text-lg text-amber-800 focus:outline-none dark:border-orange-700 dark:bg-amber-800 dark:text-amber-600  dark:placeholder:text-amber-600"
                  />
                  <FieldError name="url" className="error-message" />
                </div>
              </div>

              <div className="mb-6 md:flex md:items-center">
                <div className={'md:w-1/3'}></div>
                <div className="mx-2 md:w-2/3 ">
                  <Submit className="mt-8 inline-flex items-center rounded-md bg-orange-200 px-8 py-2 text-amber-800 shadow-2xl hover:bg-orange-400 hover:text-orange-950 hover:shadow-none dark:bg-amber-950 dark:text-amber-600">
                    Fetch
                  </Submit>
                </div>
              </div>
            </Form>
          </div>

          <div className="mt-10">
            <div className="mb-6 flex flex-col ">
              <div>
                {recipe.image != '' && (
                  <img
                    src={recipe.image}
                    alt={recipe.name}
                    className="w-full "
                  />
                )}
              </div>
              <div className={'md:w-1/3'}></div>
              <div className="">{recipe.image}</div>
              <div>{recipe.url}</div>
              <div>{recipe.name}</div>
              <div>{recipe.description}</div>
              <div>{recipe.cookTime}</div>
              <div>{recipe.prepTime}</div>
              <div>{recipe.totalTime}</div>
              <div>{recipe.recipeYield}</div>
              <div className="mx-2 md:w-2/3 ">
                <div>
                  <ul>
                    {recipe.recipeIngredients.map((item, index) => {
                      return <li key={index}>{item}</li>
                    })}
                  </ul>
                </div>
                <div>
                  <ul>
                    {recipe.recipeInstructions.map((item, index) => {
                      return <li key={index}>{item}</li>
                    })}
                  </ul>
                </div>
                <div>
                  <ul>
                    {recipe.keywords.map((item, index) => {
                      return <li key={index}>{item}</li>
                    })}
                  </ul>
                </div>
              </div>
            </div>
            R
          </div>
        </div>
      </div>
    </>
  )
}

export default UrlScraper
