interface IAccount {
  address: string
  publicKey: string
}

export default class Account implements IAccount {
  address: string
  publicKey: string

  constructor (address: string, publicKey: string) {
    this.address = address
    this.publicKey = publicKey
  }
}
