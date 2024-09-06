# apollo-link-trace

[![npm](https://img.shields.io/npm/v/apollo-link-trace?style=flat-square)](https://www.pkgstats.com/pkg:apollo-link-trace)
[![NPM](https://img.shields.io/npm/l/apollo-link-trace?style=flat-square)](LICENSE)
[![npm](https://img.shields.io/npm/dt/apollo-link-trace?style=flat-square)](https://www.pkgstats.com/pkg:apollo-link-trace)
![Twitter Follow](https://img.shields.io/twitter/follow/ryanhefner)

Apply Trace Context headers to your Apollo Client requests

## Install

Via [npm](https://npmjs.com/package/apollo-link-trace)

```sh
npm install apollo-link-trace
```

Via [Yarn](https://yarn.pm/apollo-link-trace)

```sh
yarn add apollo-link-trace
```

## How to use

`TraceContextLink` accepts an `options` object that allows you to pass options when creating the link.

### Options

`tracestate` - Default `tracestate` header to use for requests. This can be overridden via individual call contexts.

## Example

```
import { ApolloClient, HttpLink, InMemoryCache, from } from '@apollo/client'
import { TraceContextLink } from 'apollo-link-trace'

const apolloClient = new ApolloClient({
  link: from([
    new TraceContextLink(),
    new HttpLink({
      uri: graphqlEndpoint,
    })
  ]),
  cache: new InMemoryCache(),
});
```

## License

[MIT](LICENSE) © [Ryan Hefner](https://www.ryanhefner.com)
