import { ITranaction } from './../core/transaction'
import { IConnectProps } from './../core/types'

export enum PetraErrorCode {
  NoAccounts = 4000,
  UserRejected = 4001,
  Unauthorized = 4100
}

export interface Petra extends IConnectProps {
  signTransaction: () => Promise<ITranaction>
}
