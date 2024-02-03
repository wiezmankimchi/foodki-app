import type { Meta, StoryObj } from '@storybook/react'

import CollectionPage from './CollectionPage'

const meta: Meta<typeof CollectionPage> = {
  component: CollectionPage,
}

export default meta

type Story = StoryObj<typeof CollectionPage>

export const Primary: Story = {}
