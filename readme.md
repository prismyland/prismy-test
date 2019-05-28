# `prismy-test-server`

:telescope: E2E test tool for [prismy](https://github.com/BoostIO/prismy).

[![Build Status](https://travis-ci.com/BoostIO/prismy-test-server.svg?branch=master)](https://travis-ci.com/BoostIO/prismy-test-server)
[![codecov](https://codecov.io/gh/BoostIO/prismy-test-server/branch/master/graph/badge.svg)](https://codecov.io/gh/BoostIO/prismy-test-server)
[![NPM download](https://img.shields.io/npm/dm/prismy-test-server.svg)](https://www.npmjs.com/package/prismy-test-server)
[![Supported by BoostIO](https://github.com/BoostIO/boostio-materials/raw/master/v1/boostio-shield-v1.svg?sanitize=true)](https://boostio.co)

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
