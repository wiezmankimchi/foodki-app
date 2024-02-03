// Pass props to your component by passing an `args` object to your story
//
// ```tsx
// export const Primary: Story = {
//  args: {
//    propName: propValue
//  }
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { Meta, StoryObj } from '@storybook/react'

import {Toast} from './Toast'

const meta: Meta<typeof Toast> = {
  component: Toast,
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof Toast>

export const Primary: Story = {}
