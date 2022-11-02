import { AptosClient } from 'aptos'

export default class Aptos {
  client: AptosClient | null = null
  constructor (url: string) {
    this.client = new AptosClient(url)
  }

  // createAccount () {
  //   return this.client.
  // }

  // getAccount (): Promise<Types.AccountData> {
  //   return this.client?.getAccount()
  // }

  // connect (): Promise<> {
  //   return this.client.connect()
  // }
}

const aptos = new Aptos('https://fullnode.devnet.aptoslabs.com/v1')

console.log(aptos)
