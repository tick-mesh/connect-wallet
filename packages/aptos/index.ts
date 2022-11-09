import { AptosClient } from 'aptos'

class Aptos {
  client: AptosClient
  nodeUrl: string
  constructor (nodeUrl: string) {
    this.nodeUrl = nodeUrl
    this.client = new AptosClient(this.nodeUrl)
  }
}
export default Aptos
