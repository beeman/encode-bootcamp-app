import type { Meta, StoryObj } from '@storybook/react'
import { UiProvider } from '../provider/ui-provider'
import { UiThemeToggle } from './ui-theme-toggle'

const Story: Meta<typeof UiThemeToggle> = {
  component: UiThemeToggle,
  title: 'UiThemeToggle',
}
export default Story

type Story = StoryObj<typeof UiThemeToggle>

export const Primary: Story = {
  render: (args) => (
    <UiProvider>
      <UiThemeToggle {...args} />
    </UiProvider>
  ),
  args: {},
}
