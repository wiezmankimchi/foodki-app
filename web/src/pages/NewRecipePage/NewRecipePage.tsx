import { Form, Label, TextField, Submit } from '@redwoodjs/forms'
import { Stamp, Text } from 'lucide-react'
import TextareaAutosize from 'react-autosize-textarea'

import SpanInputField from 'src/components/SpanInputField/SpanInputField'
import { Button } from 'src/components/ui/Button'
import { Separator } from 'src/components/ui/Separator/Separator'
import { cn } from 'src/lib/utils'

const NewRecipePage = () => {
  const onSubmit = (data) => {
    console.log(data)
  }

  return (
    <>
      <div className=" -mt-10 flex flex-col items-center justify-center">
        <div>
          <h1 className="text-4xl font-bold  text-amber-800 dark:text-amber-600 sm:text-3xl">
            New Recipe
          </h1>
        </div>
        <div className=" mx-2 mb-2 w-full bg-orange-50 p-5 dark:bg-amber-800 dark:text-amber-800 md:w-3/4">
          <div className="flow-root rounded-lg border border-orange-500 py-3 shadow-sm dark:border-orange-500">
            <Form onSubmit={onSubmit} className="w-full">
              <div className="mb-6 md:flex md:items-center">
                <div className={'md:w-1/3'}>
                  <Label
                    name="name"
                    className="mx-1 mb-1 block pr-4 text-lg font-bold text-amber-800 dark:text-amber-600 md:mb-0 md:text-right"
                  >
                    Recipe Name
                  </Label>
                </div>
                <div className="mx-2 md:w-2/3 ">
                  <TextField
                    name="name"
                    placeholder="Recipe Name"
                    className="leading-wider w-full appearance-none rounded border border-orange-200 bg-orange-50 px-4 py-2 text-lg text-amber-800 focus:outline-none dark:border-orange-700 dark:bg-amber-800 dark:text-amber-600  dark:placeholder:text-amber-600"
                  />
                </div>
              </div>
              <div className="h-4">&nbsp;</div>
              <div className="mb-6 md:flex md:items-center">
                <div className={'md:w-1/3'}>
                  <Label
                    name="description"
                    className="mx-1 mb-1 block pr-4 text-lg font-bold text-amber-800 dark:text-amber-600 md:mb-0 md:text-right"
                  >
                    Description <span className="text-sm">(optional)</span>
                  </Label>
                </div>
                <div className="mx-2 md:w-2/3 ">
                  <TextareaAutosize
                    name="description"
                    placeholder="Description"
                    className="leading-wider w-full appearance-none rounded border border-orange-200 bg-orange-50 px-4 py-2 text-lg text-amber-800 focus:outline-none dark:border-orange-700  dark:bg-amber-800 dark:text-amber-600  dark:placeholder:text-amber-600"
                  />
                </div>
              </div>
              <div className="mb-6 md:flex md:items-center">
                <div className={'md:w-1/3'}>
                  <Label
                    name="ingedients"
                    className="mx-1 mb-1 block pr-4 text-lg font-bold text-amber-800 dark:text-amber-600 md:mb-0 md:text-right"
                  >
                    Ingredients{' '}
                    <span className="text-sm">(one on each line)</span>
                  </Label>
                </div>
                <div className="mx-2 md:w-2/3 ">
                  <TextareaAutosize
                    name="ingedients"
                    placeholder="Ingredients"
                    className="leading-wider w-full appearance-none rounded border border-orange-200 bg-orange-50 px-4 py-2 text-lg text-amber-800 focus:outline-none dark:border-orange-700  dark:bg-amber-800 dark:text-amber-600  dark:placeholder:text-amber-600"
                  />
                </div>
              </div>
              <div className="mb-6 md:flex md:items-center">
                <div className={'md:w-1/3'}>
                  <Label
                    name="instructions"
                    className="mx-1 mb-1 block pr-4 text-lg font-bold text-amber-800 dark:text-amber-600 md:mb-0 md:text-right"
                  >
                    Instructions{' '}
                    <span className="text-sm">(supports Mardkdown)</span>
                  </Label>
                </div>
                <div className="mx-2 md:w-2/3 ">
                  <TextareaAutosize
                    name="instructions"
                    placeholder="Instructions"
                    className="leading-wider w-full appearance-none rounded border border-orange-200 bg-orange-50 px-4 py-2 text-lg text-amber-800 focus:outline-none dark:border-orange-700  dark:bg-amber-800 dark:text-amber-600  dark:placeholder:text-amber-600"
                  />
                </div>
              </div>
              <div className="mb-6 md:flex md:items-center">
                <div className={'md:w-1/3'}>
                  <Label
                    name="notes"
                    className="mx-1 mb-1 block pr-4 text-lg font-bold text-amber-800 dark:text-amber-600 md:mb-0 md:text-right"
                  >
                    Notes <span className="text-sm">(optional)</span>
                  </Label>
                </div>
                <div className="mx-2 md:w-2/3 ">
                  <TextareaAutosize
                    name="notes"
                    placeholder="Notes"
                    className="leading-wider w-full appearance-none rounded border border-orange-200 bg-orange-50 px-4 py-2 text-lg text-amber-800 focus:outline-none dark:border-orange-700  dark:bg-amber-800 dark:text-amber-600  dark:placeholder:text-amber-600"
                  />
                </div>
              </div>
              <div className="mb-6 md:flex md:items-center">
                <div className={' md:w-1/3'}>
                  <span className=" mx-1 mb-1 block pr-4 text-base font-semibold text-amber-800 dark:text-amber-600  md:mb-0 md:text-right">
                    Details
                  </span>
                </div>
                <div className="mx-2 md:w-2/3 ">
                  <Separator className="h-px bg-orange-200 dark:bg-orange-700" />
                </div>
              </div>
              <div className="mb-6 md:flex md:items-center">
                <div className={'md:w-1/3'}>
                  <Label
                    name="source"
                    className="mx-1 mb-1 block pr-4 text-base font-bold text-amber-800 dark:text-amber-600 md:mb-0 md:text-right"
                  >
                    Source
                  </Label>
                </div>
                <div className="mx-2 md:w-2/3 ">
                  <TextField
                    name="source"
                    placeholder="Source"
                    className="leading-wider w-full appearance-none rounded border border-orange-200 bg-orange-50 px-4 py-2 text-base text-amber-800 focus:outline-none dark:border-orange-700   dark:bg-amber-800 dark:text-amber-600  dark:placeholder:text-amber-600"
                  />
                </div>
              </div>
              <div className="mb-6 md:flex md:items-center">
                <div className={'md:w-1/3'}>
                  <Label
                    name="author"
                    className="mx-1 mb-1 block pr-4 text-base font-bold text-amber-800 dark:text-amber-600 md:mb-0 md:text-right"
                  >
                    Author
                  </Label>
                </div>
                <div className="mx-2 md:w-2/3 ">
                  <TextField
                    name="author"
                    placeholder="Author"
                    className="leading-wider w-full appearance-none rounded border border-orange-200 bg-orange-50 px-4 py-2 text-base text-amber-800 focus:outline-none dark:border-orange-700   dark:bg-amber-800 dark:text-amber-600  dark:placeholder:text-amber-600"
                  />
                </div>
              </div>
              <div className="mb-6 md:flex md:items-center">
                <div className={'md:w-1/3'}>
                  <Label
                    name="yield"
                    className="mx-1 mb-1 block pr-4 text-base font-bold text-amber-800 dark:text-amber-600 md:mb-0 md:text-right"
                  >
                    Yield
                  </Label>
                </div>
                <div className="mx-2 md:w-2/3 ">
                  <TextField
                    name="yield"
                    placeholder="Yield"
                    className="leading-wider w-full appearance-none rounded border border-orange-200 bg-orange-50 px-4 py-2 text-base text-amber-800 focus:outline-none dark:border-orange-700   dark:bg-amber-800 dark:text-amber-600  dark:placeholder:text-amber-600"
                  />
                </div>
              </div>
              <div className="mb-6 md:flex md:items-center">
                <div className={'md:w-1/3'}>
                  {/* <Label
                    name="save"
                    className="mx-1 mb-1 block pr-4 text-base font-bold text-amber-800 dark:text-amber-600 md:mb-0 md:text-right"
                  >

                  </Label> */}
                </div>
                <div className="mx-2 md:w-2/3 ">
                  <Submit className="mt-8 inline-flex items-center rounded-md bg-orange-200 px-8 py-2 text-amber-800 shadow-2xl hover:bg-orange-400 hover:text-orange-950 hover:shadow-none dark:bg-amber-950 dark:text-amber-600">
                    Save
                  </Submit>
                </div>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </>
  )
}

export default NewRecipePage
