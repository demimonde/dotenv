import { equal, ok } from 'zoroaster/assert'
import Context from '../context'
import dotenv from '../../src'

/** @type {Object.<string, (c: Context)>} */
const T = {
  context: Context,
  'is a function'() {
    equal(typeof dotenv, 'function')
  },
  async 'calls package without error'() {
    await dotenv()
  },
  async 'gets a link to the fixture'({ FIXTURE }) {
    const res = await dotenv({
      text: FIXTURE,
    })
    ok(res, FIXTURE)
  },
}

export default T