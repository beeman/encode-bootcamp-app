import Dexie, { Table } from 'dexie'
import { Keypair } from './keypair'

class AppDB extends Dexie {
  keypairs!: Table<Keypair>

  constructor() {
    super('BootcampAppDB')
    this.version(2).stores({
      keypairs: `
        ++id,
        name,
        publicKey`,
    })
  }
}

export const db = new AppDB()
