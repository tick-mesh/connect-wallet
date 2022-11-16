import { Martian } from './types'
import AptosWallet from '../core/wallet'

export default class MartianWallet extends AptosWallet {
  martianClient: Martian

  constructor (martianClient: Martian) {
    super(martianClient)
    this.martianClient = martianClient
  }
}
