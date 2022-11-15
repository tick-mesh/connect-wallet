import { AptosAccount } from 'aptos'

export default class Account {
  account: AptosAccount | null = null
  privateKeyBytes: Uint8Array

  constructor (address?: string) {
    this.privateKeyBytes = new Uint8Array([])
    if (address) this.account = new AptosAccount(undefined, address)
  }

  setAccount (address: string): void {
    this.account = new AptosAccount(this.privateKeyBytes, address)
  }
}
