import { ITranaction, ITranactionPayload, ITranactionOptions } from './transaction'
import Account from './account'

export enum WalletEnum {
  Petra = 'petra',
  Pontem = 'pontem',
  Martian = 'martian'
}

export interface INetwork {
  api: string
  chainId: string
  name: string
}

export interface ISignMessageParams {
  address: boolean
  application: boolean
  chainId: boolean
  message: string
  nonce: string
}

export interface IEvent<AccountChangeType> {
  onNetworkChange: () => Promise<INetwork>
  onAccountChange: (callback: AccountChangeType) => void
  onDisconnect: () => Promise<boolean>
}

// common window property
export interface IConnectProps {
  account: () => Promise<Account>
  connect: () => Promise<Account>
  isConnected: () => Promise<boolean>
  disconnect: () => Promise<void>
}

export interface ITranactionProps {
  signMessage: (message: ISignMessageParams) => Promise<string>
  signTransaction: (payload: ITranactionPayload, options: ITranactionOptions) => Promise<ITranaction>
  signAndSubmitTransaction: (payload: ITranactionPayload, options: ITranactionOptions) => Promise<ITranaction>
}
