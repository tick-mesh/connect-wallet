import { ISignMessageParams } from '../core/types'
import { ITranaction, ITranactionPayload, ITranactionOptions } from './../core/transaction'
import { IConnectProps } from './../core/types'

export type AccountChangeCallback = (address: string) => void
export type NetworkChangeCallback = (network: INetwork) => void

export interface Pontem extends IConnectProps {
  onChangeAccount: (callback: AccountChangeCallback) => void
  onChangeNetwork: (callback: NetworkChangeCallback) => void
  network: () => Promise<INetwork>
  chainId: () => Promise<number>
  publicKey: () => Promise<string>
  signAndSubmit: (payload: ITranactionPayload, options: ITranactionOptions) => Promise<ITranaction>
  signTransaction: (payload: ITranactionPayload, options: ITranactionOptions) => Promise<ITranaction>
  signMessage: (message: ISignMessageParams) => Promise<string>
}

export interface INetwork {
  api: string
  chainId: string
  name: string
}
