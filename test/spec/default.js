import { equal, ok } from 'zoroaster/assert'
import Context from '../context'
import dotenv from '../../src'

/** @type {Object.<string, (c: Context)>} */
const T = {
  context: Context,
  'is a function'() {
    equal(typeof dotenv, 'function')
  },
}

export default T