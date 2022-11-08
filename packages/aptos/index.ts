import { AptosClient } from 'aptos'

class Aptos {
  client: AptosClient
  constructor (url: string) {
    this.client = new AptosClient(url)
  }
}
export default Aptos
