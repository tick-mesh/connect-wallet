import { IConnectProps } from './types'
import Account from './account'

export default class AptosWallet implements IConnectProps {
  client: IConnectProps
  constructor (client: IConnectProps) {
    this.client = client
  }

  connect (): Promise<Account> {
    return this.client.connect().then(res => {
      return new Account(res.address, res.publicKey)
    })
  }

  account (): Promise<Account> {
    return this.client.account().then(res => {
      return new Account(res.address, res.publicKey)
    })
  }

  isConnected (): Promise<boolean> {
    return this.client.isConnected()
  }

  disconnect (): Promise<void> {
    return this.client.disconnect()
  }
  // signMessage: (message: ISignMessageParams) => Promise<string>
  // signTransaction: (payload: ITranactionPayload, options: ITranactionOptions) => Promise<ITranaction>
  // signAndSubmitTransaction: (payload: ITranactionPayload, options: ITranactionOptions) => Promise<ITranaction>
  // onNetworkChange: () => Promise<INetwork>
  // onAccountChange: () => Promise<string>
  // onDisconnect: () => Promise<boolean>
}
