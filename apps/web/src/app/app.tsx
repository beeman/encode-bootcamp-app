import { UiLayout, UiNotFound, UiProvider } from '@encode-bootcamp-app/ui'
import { Navigate, Route, Routes } from 'react-router-dom'
import { AboutFeature } from './features/about-feature'
import { DevFeature } from './features/dev-feature'
import { HomeFeature } from './features/home-feature'
import { KeypairsFeature } from './features/keypairs-feature'
import { SolanaProvider } from './solana-provider'

export function App() {
  return (
    <UiProvider>
      <SolanaProvider>
        <UiLayout>
          <Routes>
            <Route index element={<Navigate replace to="/home" />} />
            <Route path="/about" element={<AboutFeature />} />
            <Route path="/dev" element={<DevFeature />} />
            <Route path="/keypairs" element={<KeypairsFeature />} />
            <Route path="/home" element={<HomeFeature />} />
            <Route path="*" element={<UiNotFound />} />
          </Routes>
        </UiLayout>
      </SolanaProvider>
    </UiProvider>
  )
}
