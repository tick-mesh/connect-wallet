import { Petra } from './types'
import AptosWallet from '../core/wallet'

export default class PetraWallet extends AptosWallet {
  petraClient: Petra
  constructor (petraClient: Petra) {
    super(petraClient)

    this.petraClient = petraClient
  }
}
