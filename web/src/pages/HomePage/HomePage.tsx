import { Link, routes } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web'

import LightDark from 'src/components/LightDark/LightDark'
import Logo from 'src/components/Logo/Logo'
import { useAppContext } from 'src/context/AppContext'

const data = [
  {
    id: 1,
    title: 'Card 1',
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Massa sapien faucibus et molestie ac feugiat sed. Facilisi etiam dignissim diam quis enim lobortis scelerisque. Suscipit adipiscing bibendum est ultricies integer.',
  },
  {
    id: 2,
    title: 'Card 2',
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Massa sapien faucibus et molestie ac feugiat sed. Facilisi etiam dignissim diam quis enim lobortis scelerisque. Suscipit adipiscing bibendum est ultricies integer.',
  },
  {
    id: 3,
    title: 'Card 3',
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Massa sapien faucibus et molestie ac feugiat sed. Facilisi etiam dignissim diam quis enim lobortis scelerisque. Suscipit adipiscing bibendum est ultricies integer.',
  },
]

const HomePage = () => {
  const { dark } = useAppContext()

  return (
    <>
      <Metadata title="Home" description="Home page" />
      <div className={`${dark ? 'dark' : ''}`}>
        <section className={` bg-orange-100 dark:bg-orange-900 `}>
          <div className="flex w-full flex-row justify-between">
            {/* <img
              src="/images/lets-cook-together.png"
              alt="logo"
              className="h-24 w-24"
            /> */}
            <Logo className={'h-24 w-24'} />
            <LightDark />
          </div>

          <div className=" ">
            <img
              src="/images/jay-wennington.jpg"
              className="mx-auto h-96 w-full object-cover p-5"
              alt="home page"
            />
          </div>
          {/* <div className="h-1/2">
          </div> */}
          <div className="mx-auto max-w-screen-xl px-4 py-8 text-center lg:px-12 lg:py-16">
            <a
              href="/"
              className="mb-7 inline-flex items-center justify-between rounded-full bg-gray-100 px-1 py-1 pr-4 text-sm text-gray-700 hover:bg-gray-200 dark:bg-gray-600 dark:text-white dark:hover:bg-gray-800"
            >
              <span className="bg-primary-600 mr-3 rounded-full px-4 py-1.5 text-xs text-white">
                New
              </span>{' '}
              <span className="text-sm font-medium">
                Flowbite is out! See what&apos;s new
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
              We invest in the world’s potential
            </h1>
            <p className="mb-8 text-lg font-normal text-gray-500 dark:text-gray-400 sm:px-16 lg:text-xl xl:px-48">
              Here at Flowbite we focus on markets where technology, innovation,
              and capital can unlock long-term value and drive economic growth.
            </p>
            <div className="mt-10 flex flex-wrap justify-center">
              <div className="flex flex-col md:flex-row">
                {data.map((item) => {
                  return (
                    <div
                      key={item.id}
                      className="rounderd my-2 max-w-sm transform overflow-hidden bg-white shadow-xl transition duration-500 ease-in-out hover:-translate-y-1 hover:scale-105 dark:bg-gray-700 dark:text-slate-100 hover:dark:bg-slate-800 md:mx-2"
                    >
                      {/* <img
                      className="w-full"
                      src="images/bannana-pink.jpg"
                      alt="Sunset in the mountains"
                    /> */}
                      <div className="px-6 py-4">
                        <div className="mb-2 text-xl font-bold">
                          {item.title}
                        </div>
                        <p className="text-base text-gray-700 dark:text-gray-400">
                          {item.body}
                        </p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default HomePage
