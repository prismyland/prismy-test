# `prismy-test-server`

:telescope: E2E test tool for [prismy](https://github.com/prismyland/prismy).

[![Build Status](https://travis-ci.com/prismyland/prismy-test-server.svg?branch=master)](https://travis-ci.com/prismyland/prismy-test-server)
[![codecov](https://codecov.io/gh/prismyland/prismy-test-server/branch/master/graph/badge.svg)](https://codecov.io/gh/prismyland/prismy-test-server)
[![NPM download](https://img.shields.io/npm/dm/prismy-test-server.svg)](https://www.npmjs.com/package/prismy-test-server)
[![Language grade: JavaScript](https://img.shields.io/lgtm/grade/javascript/g/prismyland/prismy-test-server.svg?logo=lgtm&logoWidth=18)](https://lgtm.com/projects/g/prismyland/prismy-test-server/context:javascript)

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
