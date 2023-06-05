import { Badge, Button, DEFAULT_THEME, Group, Stack, Text, Title } from '@mantine/core'
import { modals } from '@mantine/modals'
import { notifications } from '@mantine/notifications'
import { StoryObj } from '@storybook/react'
import type { Meta } from '@storybook/react'
import { UiCard } from '../card/ui-card'
import { UiProvider, useUi } from './ui-provider'

const Story: Meta<typeof UiProvider> = {
  component: UiProvider,
  title: 'UiProvider',
  tags: ['autodocs'],
}
export default Story
type Story = StoryObj<typeof UiProvider>
export const Primary: Story = {
  render: () => (
    <UiProvider>
      <TestContent />
    </UiProvider>
  ),
  args: {},
}

export const Secondary: Story = {
  name: 'Provide custom theme',
  render: () => (
    <UiProvider
      theme={{
        colors: {
          brand: DEFAULT_THEME.colors.pink,
        },
        components: {
          Paper: {
            defaultProps: {
              radius: 'xl',
              withBorder: false,
              p: 'xl',
              shadow: 'xl',
            },
          },
          Button: {
            defaultProps: {
              variant: 'outline',
              radius: 'xl',
              size: 'md',
            },
          },
        },
      }}
    >
      <TestContent />
    </UiProvider>
  ),
  args: {},
}
function TestContent() {
  const { colorScheme, toggleColorScheme, isSmall } = useUi()

  return (
    <UiCard>
      <Stack>
        <Group>
          <Title order={3}>UiProvider</Title>
          {isSmall ? <Badge color="red">Small</Badge> : <Badge color="green">Large</Badge>}
        </Group>
        <Text>The UiProvider adds the theme, modals, and notifications to the app.</Text>
        <Group>
          <Button
            onClick={() =>
              modals.open({
                title: 'Modal',
                children: 'This is a modal',
              })
            }
          >
            Modal
          </Button>
          <Button
            onClick={() =>
              notifications.show({
                title: 'Notification',
                message: 'This is a notification',
              })
            }
          >
            Notification
          </Button>
          <Button onClick={() => toggleColorScheme()}>Toggle Theme ({colorScheme})</Button>
        </Group>
      </Stack>
    </UiCard>
  )
}
