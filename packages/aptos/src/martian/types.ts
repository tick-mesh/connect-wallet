import { IConnectProps } from '../core/types'

export interface Martian extends IConnectProps {
  version: string
  chainId: number
}
