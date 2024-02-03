import type { Meta, StoryObj } from '@storybook/react'

import RecipePage from './RecipePage'

const meta: Meta<typeof RecipePage> = {
  component: RecipePage,
}

export default meta

type Story = StoryObj<typeof RecipePage>

export const Primary: Story = {}
