import { BoxProps, Button, Container, Group, Stack, Title } from '@mantine/core'

export interface UiPageProps extends BoxProps {
  actions?: { label: string; action: () => void }[]
  title?: string
}
export function UiPage({ actions, children, title, ...props }: UiPageProps) {
  return (
    <Container>
      <Stack my="md" {...props}>
        {title || actions?.length ? (
          <Group position="apart">
            {title ? <Title size="h2">{title}</Title> : <div />}
            {actions?.length ? (
              <Button.Group>
                {actions.map((action) => (
                  <Button key={action.label} size="xs" variant="default" onClick={action.action}>
                    {action.label}
                  </Button>
                ))}
              </Button.Group>
            ) : null}
          </Group>
        ) : null}
        {children}
      </Stack>
    </Container>
  )
}
