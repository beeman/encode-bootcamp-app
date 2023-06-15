import { UiPage } from '@encode-bootcamp-app/ui'
import { Alert } from '@mantine/core'
import { useWallet } from '@solana/wallet-adapter-react'

export function HomeFeature() {
  const { wallet } = useWallet()
  return (
    <UiPage title="Home">
      {wallet?.adapter?.publicKey ? (
        <Alert>You are connected to {wallet.adapter?.publicKey?.toString()}</Alert>
      ) : (
        <Alert>You are not connected to a wallet</Alert>
      )}
    </UiPage>
  )
}
