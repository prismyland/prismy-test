# `prismy-test`

:wrench: Test toolkit for [prismy](https://github.com/prismyland/prismy).

[![Build Status](https://travis-ci.com/prismyland/prismy-test.svg?branch=master)](https://travis-ci.com/prismyland/prismy-test)
[![codecov](https://codecov.io/gh/prismyland/prismy-test/branch/master/graph/badge.svg)](https://codecov.io/gh/prismyland/prismy-test)
[![NPM download](https://img.shields.io/npm/dm/prismy-test.svg)](https://www.npmjs.com/package/prismy-test)
[![Language grade: JavaScript](https://img.shields.io/lgtm/grade/javascript/g/prismyland/prismy-test.svg?logo=lgtm&logoWidth=18)](https://lgtm.com/projects/g/prismyland/prismy-test/context:javascript)

```ts
import got from 'got'
import { prismy, res } from 'prismy'
import { testHandler } from 'prismy-test'

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
})
```

## License

MIT
