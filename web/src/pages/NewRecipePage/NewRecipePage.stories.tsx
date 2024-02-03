import type { Meta, StoryObj } from '@storybook/react'

import NewRecipePage from './NewRecipePage'

const meta: Meta<typeof NewRecipePage> = {
  component: NewRecipePage,
}

export default meta

type Story = StoryObj<typeof NewRecipePage>

export const Primary: Story = {}
