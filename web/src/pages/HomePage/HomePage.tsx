import { Link, routes } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web'
import { useEffect } from 'react'

import { useAppContext } from 'src/context/AppContext'
import { demoRecipe } from 'src/context/demoRecipe'

const data = [
  {
    id: 1,
    title: 'Share with Anyone',
    body: 'Keep recipes private, or share  your best via links, or PDFs.',
    link: routes.recipe(),
  },
  {
    id: 2,
    title: 'Cook Mode',
    body: 'See just what you need for cooking. No distructions.',
    link: routes.cookMode(),
  },
  {
    id: 6,
    title: 'Enter One',
    body: 'Enter your favorite recipe',
    link: routes.newRecipe(),
  },
  {
    id: 3,
    title: 'Import',
    body: 'Import your favorites recipes directly from the web.',
    link: routes.import(),
  },
  {
    id: 4,
    title: 'Collections',
    body: 'Create collections of recipes, and share with anyone.',
    link: routes.collection(),
  },
  {
    id: 5,
    title: 'Grocery List',
    body: 'Add ingedients from your recipes to your grocery list.',
    link: routes.groceryList(),
  },
]

const HomePage = () => {
  const { dark, recipe, setRecipe } = useAppContext()

  useEffect(() => {
    recipe.name === undefined ? setRecipe(demoRecipe) : null
  }, [])

  return (
    <>
      <Metadata title="Home" description="Home page" />
      <div className=" ">
        <img
          src="https://s3.kimchi.synology.me/foodki/demo/jay-wennington-compressed.jpg"
          className="mx-auto h-96 w-full object-cover p-5"
          alt="home page"
        />
      </div>
      {/* <div className="h-1/2">
          </div> */}
      <div className="mx-auto max-w-screen-xl px-4 py-8 text-center lg:px-12 lg:py-12">
        <a
          href="/"
          className="mb-7 inline-flex items-center justify-between rounded-full bg-gray-100 px-1 py-1 pr-4 text-sm text-gray-700 hover:bg-gray-200 dark:bg-gray-600 dark:text-white dark:hover:bg-gray-800"
        >
          <span className="bg-primary-600 mr-3 rounded-full px-4 py-1.5 text-xs text-orange-500 dark:text-yellow-300">
            New
          </span>{' '}
          <span className="text-sm font-medium dark:text-orange-400">
            See what&apos;s new
          </span>
          <svg
            className="ml-2 h-5 w-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clipRule="evenodd"
            ></path>
          </svg>
        </a>
        <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
          Let&apos;s Cook Together
        </h1>
        <p className="mb-8 text-lg font-normal text-gray-500 dark:text-gray-400 sm:px-16 lg:text-xl xl:px-48">
          Arrange your recipes in one location, where you can share with others,
          create new ones, find ingedients, and most importantly Let&apos;s Cook
          Together!!!
        </p>

        <div className=" flex items-center justify-center">
          <div className="grid-col-1  grid gap-4 md:grid-cols-2 lg:grid-cols-3 ">
            {data.map((item) => {
              return (
                <Link to={item.link} key={item.id}>
                  <div className="relative mt-6 flex h-48 w-72 transform flex-col overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700 shadow-2xl transition delay-200 ease-in-out hover:-translate-y-1 hover:scale-105 dark:bg-gray-700 dark:text-slate-100 hover:dark:bg-slate-800 md:w-80 lg:w-72">
                    {/* <img
                      className="w-full"
                      src="images/bannana-pink.jpg"
                      alt="Sunset in the mountains"
                    /> */}
                    <div className=" min-h-44 px-6 py-4">
                      <div className="mb-1 min-h-14 text-xl font-bold">
                        {item.title}
                      </div>
                      <p className="text-base text-gray-700 dark:text-gray-400">
                        {item.body}
                      </p>
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </div>
    </>
  )
}

export default HomePage
