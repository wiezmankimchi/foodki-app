import type { Meta, StoryObj } from '@storybook/react'

import CookModePage from './CookModePage'

const meta: Meta<typeof CookModePage> = {
  component: CookModePage,
}

export default meta

type Story = StoryObj<typeof CookModePage>

export const Primary: Story = {}
