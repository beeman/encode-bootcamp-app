import { BoxProps, Container, Stack, Title } from '@mantine/core'

export interface UiPageProps extends BoxProps {
  title?: string
}
export function UiPage({ children, title, ...props }: UiPageProps) {
  return (
    <Container>
      <Stack my="md" {...props}>
        {title ? <Title size="h2">{title}</Title> : null}
        {children}
      </Stack>
    </Container>
  )
}
