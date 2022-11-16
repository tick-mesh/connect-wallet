import { Martian } from '../martian/types'
import { Pontem } from '../pontem/types'
import { Petra } from '../petra/types'
import PetraWallet from '../petra'
import PontemWallet from '../pontem'
import MartianWallet from '../martian'
import { WalletEnum } from './types'

type WalletType = PetraWallet | PontemWallet | MartianWallet

const CreateClient = (walletName: WalletEnum): WalletType => {
  if (walletName === WalletEnum.Pontem) {
    return new PontemWallet(window.pontem as Pontem)
  } else if (walletName === WalletEnum.Martian) {
    return new MartianWallet(window.martian as Martian)
  } else { // walletName === WalletEnum.Petra
    return new PetraWallet(window.aptos as Petra)
  }
}

export default CreateClient
