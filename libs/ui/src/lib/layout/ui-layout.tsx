import { Box, Container } from '@mantine/core'
import { WalletMultiButton } from '@pubkeyapp/wallet-adapter-mantine-ui'
import { ReactNode } from 'react'
import { UiLayoutHeader } from './ui-layout-header'

export function UiLayout({ children }: { children: ReactNode }) {
  return (
    <Box>
      <UiLayoutHeader
        profile={<WalletMultiButton />}
        links={[
          { label: 'Home', link: '/home' },
          { label: 'About', link: '/about' },
        ]}
      />
      <Container>{children}</Container>
    </Box>
  )
}
