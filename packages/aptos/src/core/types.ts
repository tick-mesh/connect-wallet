export enum Network {
  Testnet = 'Testnet',
  Mainnet = 'Mainnet',
  Devnet = 'Devnet'
}

export interface IEvent {
  onNetworkChange: () => Promise<Network>
  onAccountChange: () => Promise<string>
  onDisconnect: () => Promise<boolean>
}

export interface IWalletProps {
  account: () => Promise<string>
  connect: () => Promise<void>
  isConnected: () => Promise<boolean>
  disconnect: () => Promise<void>
  network: () => Promise<void>
  signTransaction: () => Promise<void>
  signAndSubmitTransaction: () => Promise<void>
}
