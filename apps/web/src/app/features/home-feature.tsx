import { UiDebug, UiPage } from '@encode-bootcamp-app/ui'

export function HomeFeature() {
  return (
    <UiPage title="Home">
      <UiDebug data={['data']} open />
    </UiPage>
  )
}
