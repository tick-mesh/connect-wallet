// from wallet
export interface IClient {
  account: () => Promise<string>
}

// window.aptos => aptos
class Aptos {
  client: IClient

  constructor (client: IClient) {
    this.client = client
  }

  async account (): Promise<string> {
    return await this.client.account()
  }
}
export default Aptos
