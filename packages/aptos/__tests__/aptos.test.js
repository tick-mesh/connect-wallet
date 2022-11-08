import Aptos from '../index.ts'

describe('create aptos', () => {
  it('success', () => {
    const aptos = new Aptos('----')
    console.log(aptos.client)
  })
})
