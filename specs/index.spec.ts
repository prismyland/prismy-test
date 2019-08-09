import got from 'got'
import { prismy, res } from 'prismy'
import { testHandler } from '../src'

describe('testServer', () => {
  it('tests server', async () => {
    const handler = prismy([], () => {
      return res('Hello, World!')
    })

    await testHandler(handler, async url => {
      const result = await got(url)

      expect(result).toMatchObject({
        body: 'Hello, World!'
      })
    })
  })

  it('tests server', async () => {
    const handler = prismy([], () => {
      return res('Hello, World!')
    })

    await testHandler(handler, async url => {
      const result = await got(url)

      expect(result).toMatchObject({
        body: 'Hello, World!'
      })
    })
  })

  it('handles error', async () => {
    const handler = prismy([], () => {
      return res('Hello, World!')
    })

    await expect(
      testHandler(handler, async url => {
        throw new Error('Bang!')
      })
    ).rejects.toMatchObject({
      message: 'Bang!'
    })
  })
})
