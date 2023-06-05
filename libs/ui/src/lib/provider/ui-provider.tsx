import {
  ColorScheme,
  ColorSchemeProvider,
  DEFAULT_THEME,
  Loader,
  MantineProvider,
  MantineThemeOverride,
  useMantineTheme,
} from '@mantine/core'
import { useHotkeys, useLocalStorage, useMediaQuery } from '@mantine/hooks'
import { ModalsProvider } from '@mantine/modals'
import { Notifications } from '@mantine/notifications'

import React, { createContext, ReactNode, Suspense, useContext } from 'react'
import { UiLoader } from '../loader/ui-loader'

export const defaultTheme: MantineThemeOverride = {
  colors: {
    brand: DEFAULT_THEME.colors.blue,
  },
  loader: 'dots',
  primaryColor: 'brand',
}

export interface UiProviderContext {
  colorScheme: ColorScheme
  toggleColorScheme: (colorScheme?: ColorScheme) => void
  isSmall: boolean
}

const Context = createContext<UiProviderContext>({} as UiProviderContext)

export interface UiProviderProps {
  children: ReactNode
  theme?: MantineThemeOverride
}

export function UiProvider(props: UiProviderProps) {
  const appTheme = { ...defaultTheme, ...props.theme }
  const theme = useMantineTheme()
  const isSmall = useMediaQuery(`(max-width: ${theme.breakpoints.md})`)
  const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({
    key: 'mantine-color-scheme',
    defaultValue: 'dark',
    getInitialValueInEffect: true,
  })

  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'))

  useHotkeys([['mod+J', () => toggleColorScheme()]])

  const value: UiProviderContext = {
    colorScheme,
    toggleColorScheme,
    isSmall,
  }

  return (
    <Context.Provider value={value}>
      <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
        <MantineProvider
          theme={{
            colorScheme,
            ...appTheme,
          }}
          withGlobalStyles
          withNormalizeCSS
        >
          <ModalsProvider>
            <Notifications zIndex={1000} />
            <Suspense fallback={<UiLoader fullscreen />}>{props.children}</Suspense>
          </ModalsProvider>
        </MantineProvider>
      </ColorSchemeProvider>
    </Context.Provider>
  )
}

export const useUi = () => useContext(Context)
