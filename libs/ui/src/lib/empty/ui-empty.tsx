import { UiCard } from '@encode-bootcamp-app/ui'
import { Button, Group, Stack, Title } from '@mantine/core'

export function UiEmpty({ title, action, actionLabel }: { title: string; action: () => void; actionLabel: string }) {
  return (
    <UiCard py="xl">
      <Stack spacing="xl" my="xl">
        <Group position="center">
          <Title order={3}>{title}</Title>
        </Group>
        <Group position="center">
          <Button onClick={action}>{actionLabel}</Button>
        </Group>
      </Stack>
    </UiCard>
  )
}
