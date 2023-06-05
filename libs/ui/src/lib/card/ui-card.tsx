import { Paper, PaperProps, useMantineTheme } from '@mantine/core'
import React from 'react'

export interface UiCardProps extends PaperProps {}

export function UiCard(props: UiCardProps) {
  const theme = useMantineTheme()
  const { defaultProps } = (theme.components.Paper ?? {}) as { defaultProps: PaperProps }

  return (
    <Paper
      p={defaultProps?.p ?? 'sm'}
      radius={defaultProps?.radius ?? 'sm'}
      shadow={defaultProps?.shadow ?? 'sm'}
      withBorder={defaultProps?.withBorder ?? true}
      {...props}
    />
  )
}
