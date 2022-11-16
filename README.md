# connect-wallet

React wallet connection component

support chain 
- [ ] aptos
- [ ] evm ( eth, bsc, ploygon )
- [ ] solona

how to use 

```js
import { CreateClient,  WalletEnum } from '@tichmesh/aptos'
const client = CreateClient(WalletEnum.Aptos)

// connect
client.connect
client.account
client.isConnected
client.disconnect

// traction
client.signAndSubmitTransaction
client.signTransaction
client.signMessage

// event
client.onNetworkChange
client.onAccountChange
client.onDisconnect
```