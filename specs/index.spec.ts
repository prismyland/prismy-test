import { testServer } from '../src'
import got from 'got'

describe('testServer', () => {
  it('tests server', async () => {
    class Handler {
      handle() {
        return 'Hello, World!'
      }
    }

    await testServer(Handler, async url => {
      const result = await got(url)

      expect(result).toMatchObject({
        body: 'Hello, World!'
      })
    })
  })

  it('handles error', async () => {
    class Handler {
      handle() {
        return 'Hello, World!'
      }
    }

    await expect(
      testServer(Handler, async url => {
        throw new Error('Bang!')
      })
    ).rejects.toMatchObject({
      message: 'Bang!'
    })
  })
})
