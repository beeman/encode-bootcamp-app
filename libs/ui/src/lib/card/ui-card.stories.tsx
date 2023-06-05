import type { Meta } from '@storybook/react'
import { StoryObj } from '@storybook/react'
import { UiProvider } from '../provider/ui-provider'
import { UiThemeToggle } from '../theme-toggle/ui-theme-toggle'
import { UiCard } from './ui-card'

const Story: Meta<typeof UiCard> = {
  component: UiCard,
  title: 'UiCard',
  tags: ['autodocs'],
}
export default Story

type Story = StoryObj<typeof UiCard>
export const Primary: Story = {
  render: (args) => (
    <UiProvider>
      <UiCard {...args}>
        <div>Test</div>
        <UiThemeToggle />
      </UiCard>
    </UiProvider>
  ),
  args: {
    withBorder: true,
    radius: 'md',
    p: 'md',
  },
}

export const Secondary: Story = {
  render: (args) => (
    <UiProvider>
      <UiCard {...args}>
        <div>Test</div>
        <UiThemeToggle />
      </UiCard>
    </UiProvider>
  ),
  args: {
    withBorder: true,
    radius: 'xl',
    p: 'xl',
  },
}
