const { readFileSync } = require('fs');
const { join } = require('path');

/**
 * Read Environment Variables From The .env File Into process.env.
 * @param {Config} [config] Options for the program.
 * @param {boolean} [config.shouldRun=true] A boolean option. Default `true`.
 * @param {string} config.text A text to return.
 */
               function dotenv(config = {}) {
  const {
    silent = false,
    location = process.cwd(),
  } = config
  try {
    const j = join(location, '.env')
    const f = `${readFileSync(j)}`
    const ff = f.split('\n')
    ff.forEach(env => {
      const [e, ...rest] = env.split('=')
      !silent && process.stdout.write(`[+] ${e} `)
      process.env[e] = rest.join('=')
    })
    !silent && process.stdout.write('\n')
  } catch (err) {
    console.log(err)
  }
}

/* documentary types/index.xml */
/**
 * @typedef {Object} Config Options for the program.
 * @prop {boolean} [shouldRun=true] A boolean option. Default `true`.
 * @prop {string} text A text to return.
 */


module.exports = dotenv