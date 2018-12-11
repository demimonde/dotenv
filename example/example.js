/* yarn example/ */
import dotenv from '../src'

(async () => {
  const res = await dotenv({
    text: 'example',
  })
  console.log(res)
})()