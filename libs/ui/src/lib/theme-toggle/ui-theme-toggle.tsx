import { Switch, SwitchProps, useMantineTheme } from '@mantine/core'
import { IconMoonStars, IconSun } from '@tabler/icons-react'
import { useUi } from '../provider/ui-provider'

export interface UiThemeToggleProps extends SwitchProps {}
export function UiThemeToggle(props: UiThemeToggleProps) {
  const theme = useMantineTheme()
  const { colorScheme, toggleColorScheme } = useUi()

  return (
    <Switch
      checked={colorScheme === 'dark'}
      onChange={() => toggleColorScheme()}
      size="lg"
      onLabel={<IconSun color={theme.white} size="1.25rem" stroke={1.5} />}
      offLabel={<IconMoonStars color={theme.colors.gray[6]} size="1.25rem" stroke={1.5} />}
      {...props}
    />
  )
}
