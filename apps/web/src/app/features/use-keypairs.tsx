import { db } from '@encode-bootcamp-app/db'
import { Keypair } from '@solana/web3.js'
import { useLiveQuery } from 'dexie-react-hooks'

export function useKeypairs() {
  const items = useLiveQuery(() => db.keypairs.orderBy('name').toArray())
  const itemCount = useLiveQuery(() => db.keypairs.count())

  async function generateKeypair() {
    const kp = Keypair.generate()

    return db.keypairs.add({
      name: kp.publicKey.toString(),
      publicKey: kp.publicKey.toString(),
      secret: kp.secretKey.toString(),
    })
  }

  async function importKeypair(secret?: string | null) {
    if (!secret) {
      return Promise.reject()
    }
    const kp = Keypair.fromSecretKey(Uint8Array.from(JSON.parse(secret)))

    if (!kp.publicKey) {
      return Promise.reject()
    }

    return db.keypairs.add({
      name: kp.publicKey.toString(),
      publicKey: kp.publicKey.toString(),
      secret: kp.secretKey.toString(),
    })
  }

  return { generateKeypair, importKeypair, items, itemCount }
}
