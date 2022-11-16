import { ISignMessageParams, INetwork } from '../core/types'
import { ITranactionPayload, ITranactionOptions, ITranaction } from './../core/transaction'
import { Pontem, AccountChangeCallback, NetworkChangeCallback } from './types'
import AptosWallet from '../core/wallet'

export default class PontemWallet extends AptosWallet {
  pontemClient: Pontem

  constructor (pontemClient: Pontem) {
    super(pontemClient)
    this.pontemClient = pontemClient
  }

  onAccountChange (callback: AccountChangeCallback): void {
    this.pontemClient.onChangeAccount(callback)
  }

  onNetworkChange (callback: NetworkChangeCallback): void {
    this.pontemClient.onChangeNetwork(callback)
  }

  network (): Promise<INetwork> {
    return this.pontemClient.network()
  }

  chainId (): Promise<number> {
    return this.pontemClient.chainId()
  }

  publicKey (): Promise<string> {
    return this.pontemClient.publicKey()
  }

  signAndSubmit (payload: ITranactionPayload, options: ITranactionOptions): Promise<ITranaction> {
    return this.pontemClient.signAndSubmit(payload, options)
  }

  signTransaction (payload: ITranactionPayload, options: ITranactionOptions): Promise<ITranaction> {
    return this.pontemClient.signTransaction(payload, options)
  }

  signMessage (message: ISignMessageParams): Promise<string> {
    return this.pontemClient.signMessage(message)
  }
}
