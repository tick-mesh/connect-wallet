import { IWalletProps } from './types'

class Aptos {
  wallet: IWalletProps

  constructor (client: IWalletProps) {
    this.wallet = client
  }

  async account (): Promise<string> {
    return await this.wallet.account()
  }
}
export default Aptos
