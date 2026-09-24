
import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { SerialifColorSDK } from '..'


describe('exists', async () => {

  test('test-mode', () => {
    const testsdk = SerialifColorSDK.test()
    equal(testsdk instanceof SerialifColorSDK, true,
      'SerialifColorSDK.test() must return a client synchronously')
  })

})
