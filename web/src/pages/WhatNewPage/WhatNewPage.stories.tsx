import type { Meta, StoryObj } from '@storybook/react'

import WhatNewPage from './WhatNewPage'

const meta: Meta<typeof WhatNewPage> = {
  component: WhatNewPage,
}

export default meta

type Story = StoryObj<typeof WhatNewPage>

export const Primary: Story = {}
