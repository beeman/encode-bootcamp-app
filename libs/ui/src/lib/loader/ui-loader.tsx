import { Flex, Loader, LoaderProps } from '@mantine/core'

export type UiLoaderProps = LoaderProps & { fullscreen?: boolean }

export function UiLoader({ fullscreen, ...props }: UiLoaderProps) {
  const loader = <Loader size="xl" {...props} />
  return fullscreen ? (
    <Flex h="100%" justify="center">
      {loader}
    </Flex>
  ) : (
    loader
  )
}
