# Instalation

## Install npm

when npm i -g example-pkg
'-g' (means installing as global instead of local)

## Install dependencies
> express
- "express": "^4.18.2"

> grpc
- "@grpc/proto-loader": "^0.5.0",
- "async": "^1.5.2",
- "google-protobuf": "^3.0.0",
- "@grpc/grpc-js": "^1.1.0",
- "lodash": "^4.6.1",
- "minimist": "^1.2.0"


> grpc-dynamic-gateway
- "express": "^4.16.3",
- "grpc": "^1.24.3",
- "js-yaml": "^3.14.0",
- "json-colorizer": "^2.0.0",
- "protocol-buffers-schema": "^3.3.2",
- "yargs": "^14.0.0"

> grpc-node-gateway (mine)
- "@grpc/grpc-js": "^1.8.3",
- "@grpc/proto-loader": "^0.7.4",
- "body-parser": "^1.20.1",
- "express": "^4.18.2",
- "js-yaml": "^4.1.0",
- "protocol-buffers-schema": "^3.6.0"
- path
- fs

```sh
#
https://classic.yarnpkg.com/lang/en/docs/migrating-from-npm/
npm install

# required
npm install express #
npm install cors                        # https://www.npmjs.com/package/cors                                [DT] https://www.npmjs.com/package/@types/cors [TS]
npm install body-parser                 # https://www.npmjs.com/package/body-parser                         [DT] https://www.npmjs.com/package/@types/body-parser [TS]

npm install @grpc/proto-loader          # https://www.npmjs.com/package/@grpc/proto-loader                  [TS]
npm install @grpc/grpc-js               # https://www.npmjs.com/package/@grpc/grpc-js                       [TS]
npm install protocol-buffers-schema     # https://www.npmjs.com/package/protocol-buffers-schema             [DT] https://www.npmjs.com/package/@types/protocol-buffers-schema [TS]
npm install js-yaml                     # https://www.npmjs.com/package/js-yaml                             [DT] https://www.npmjs.com/package/@types/js-yaml [TS]


# optional display
npm install chalk@4.1.2        #chalk 5 has changed to ESM in next version # optional (display) # https://www.npmjs.com/package/chalk          [TS]
npm install json-colorizer              # optional (display) # https://www.npmjs.com/package/json-colorizer [TS]

# optional terminal
npm install yargs                       # optional (test) # https://www.npmjs.com/package/yargs     [DT] https://www.npmjs.com/package/@types/yargs [TS]
```