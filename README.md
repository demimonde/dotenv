# @demimonde/dotenv

[![npm version](https://badge.fury.io/js/%40demimonde%2Fdotenv.svg)](https://npmjs.org/package/@demimonde/dotenv)

`@demimonde/dotenv` will Read Environment Variables From The .env File Into process.env.

```sh
yarn add -E @demimonde/dotenv
```

## Table Of Contents

- [Table Of Contents](#table-of-contents)
- [API](#api)
- [`dotenv(config: Config)`](#dotenvconfig-config-void)
  * [`Config`](#type-config)
- [Copyright](#copyright)

<p align="center"><a href="#table-of-contents"><img src=".documentary/section-breaks/0.svg?sanitize=true"></a></p>

## API

The package is available by importing its default function:

```js
import dotenv from '@demimonde/dotenv'
```

<p align="center"><a href="#table-of-contents"><img src=".documentary/section-breaks/1.svg?sanitize=true"></a></p>

## `dotenv(`<br/>&nbsp;&nbsp;`config: Config,`<br/>`): void`

Call this function to get the result you want.

__<a name="type-config">`Config`</a>__: Options for the program.

|   Name   |   Type    |                  Description                   | Default |
| -------- | --------- | ---------------------------------------------- | ------- |
| silent   | _boolean_ | Do not print the names of read env variables.  | `false` |
| location | _string_  | The location where to look up the `.env` file. | `~`     |

With the following `.env` file:

```
AZURE_STORAGE_CONNECTION_STRING=DefaultEndpointsProtocol=https;AccountName=storage1234;AccountKey=hjaskd12t73DGHJs/duiSDue7687dgqbmn2BDS==;EndpointSuffix=core.windows.net
STORAGE=storage1234
CONTAINER=my-new-package
SECRET=facebook-secret
```

The next example will add 4 env variables.

```js
/* yarn example/ */
import dotenv from '@demimonde/dotenv'

dotenv()
```
```
[+] AZURE_STORAGE_CONNECTION_STRING [+] STORAGE [+] CONTAINER [+] SECRET
```

<p align="center"><a href="#table-of-contents"><img src=".documentary/section-breaks/2.svg?sanitize=true"></a></p>

## Copyright

(c) [Demimonde][1] 2018

[1]: https://demimonde.cc

<p align="center"><a href="#table-of-contents"><img src=".documentary/section-breaks/-1.svg?sanitize=true"></a></p>