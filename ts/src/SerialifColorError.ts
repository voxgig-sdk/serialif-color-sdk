
import { Context } from './Context'


class SerialifColorError extends Error {

  isSerialifColorError = true

  sdk = 'SerialifColor'

  code: string
  ctx: Context

  constructor(code: string, msg: string, ctx: Context) {
    super(msg)
    this.code = code
    this.ctx = ctx
  }

}

export {
  SerialifColorError
}

