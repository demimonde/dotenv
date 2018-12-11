import { makeTestSuite } from 'zoroaster'
import Context from '../context'
import dotenv from '../../src'

const ts = makeTestSuite('test/result', {
  async getResults(input) {
    const res = await dotenv({
      text: input,
    })
    return res
  },
  context: Context,
})

export default ts