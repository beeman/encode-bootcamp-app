import { db, Keypair } from '@encode-bootcamp-app/db'
import { notifyError, notifySuccess, UiCard, UiDebugModal, UiEmpty, UiPage } from '@encode-bootcamp-app/ui'
import { ActionIcon, Code, Group, Stack } from '@mantine/core'
import { IconTrash } from '@tabler/icons-react'
import { useKeypairs } from './use-keypairs'

export function KeypairsFeature() {
  const { generateKeypair, importKeypair, items, itemCount } = useKeypairs()
  const handleGenerate = () => generateKeypair().then(() => notifySuccess('Key generated'))
  const handleImport = () => {
    const secret = prompt('Enter secret key')

    importKeypair(secret)
      .then(() => notifySuccess('Key imported'))
      .catch(() => notifyError('Key import failed'))
  }

  const handleDelete = (id?: number) => {
    if (!id) return
    const found = items?.find((item) => item.id === id)
    if (!found) return
    if (!confirm(`Delete key ${found.publicKey}?`)) return
    db.keypairs.delete(id)
  }

  return (
    <UiPage
      title="Keypairs"
      actions={[
        { label: 'Generate', action: handleGenerate },
        { label: 'Import', action: handleImport },
      ]}
    >
      {items?.length ? (
        <KeypairList keypairs={items} handleDelete={handleDelete} />
      ) : (
        <UiEmpty title="No keypairs found" action={handleGenerate} actionLabel="Generate keypair" />
      )}
    </UiPage>
  )
}

export function KeypairList({ keypairs, handleDelete }: { keypairs: Keypair[]; handleDelete: (id?: number) => void }) {
  return (
    <Stack>
      {keypairs?.map((item) => (
        <UiCard key={item.id}>
          <Group position="apart">
            <Code>{item.publicKey}</Code>
            <Group spacing={2}>
              <UiDebugModal data={item} />
              <ActionIcon color="red" onClick={() => handleDelete(item.id)}>
                <IconTrash size={16} />
              </ActionIcon>
            </Group>
          </Group>
        </UiCard>
      ))}
    </Stack>
  )
}
