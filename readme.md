# `prismy-test-server`

:telescope: E2E test tool for [prismy](https://github.com/BoostIO/prismy).

```ts
import { testServer } from 'prismy-test-server'
import got from 'got'

describe('testServer', () => {
  it('tests server', async () => {
    class Handler {
      execute() {
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
})
```

## License

MIT
