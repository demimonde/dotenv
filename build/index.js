const { readFileSync } = require('fs');
const { join } = require('path');

/**
 * Read Environment Variables From The .env File Into process.env.
 * @param {Config} [config] Options for the program.
 * @param {boolean} [config.silent=false] Do not print the names of read env variables. Default `false`.
 * @param {string} [config.location="~"] The location where to look up the `.env` file. Default `~`.
 * @param {string} [config.name=".env"] The name of the `.env` file. Default `.env`.
 */
function dotenv(config = {}) {
  const {
    silent = false,
    location = process.cwd(),
    name = '.env',
  } = config
  try {
    const j = join(location, name)
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
 * @prop {boolean} [silent=false] Do not print the names of read env variables. Default `false`.
 * @prop {string} [location="~"] The location where to look up the `.env` file. Default `~`.
 * @prop {string} [name=".env"] The name of the `.env` file. Default `.env`.
 */


module.exports = dotenv