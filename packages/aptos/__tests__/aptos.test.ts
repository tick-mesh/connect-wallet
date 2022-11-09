import Aptos from '../index.ts'

import { expect } from 'chai'
import 'mocha'

describe('create aptos', () => {
  it('success', () => {
    const aptos = new Aptos('----')
    console.log(aptos.client)
  })
})
