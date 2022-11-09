import 'jest'

import Aptos from '../index'

describe('create aptos', () => {
  test('success', () => {
    const url = 'https://fullnode.mainnet.aptoslabs.com'
    const aptos = new Aptos(url)
    expect(aptos.nodeUrl).toEqual(url)
  })
})
