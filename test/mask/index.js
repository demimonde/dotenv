import { makeTestSuite } from 'zoroaster'
import Context from '../context'
import TempContext from 'temp-context'
import { resolve } from 'path'

const ts = makeTestSuite('test/result', {
  fork: {
    /**
     * @param {string[]} args
     * @param {TempContext} context
     */
    async getArgs(args, { TEMP, write, clone }) {
      await clone('test/fixture/.env', TEMP)
      const p = await write('index.js', `
import dotenv from '../../src'
dotenv()
      `)
      return [resolve(p)]
    },
    module: '../fixture',
    /** @param {TempContext} temp */
    getOptions({ TEMP }) {
      return {
        cwd: TEMP,
      }
    },
  },
  mapActual({ stdout }) {
    return stdout.trim()
  },
  context: TempContext,
})

export default ts