import { ApolloClient } from 'apollo-client'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { HttpLink } from 'apollo-link-http'

export const v2client = new ApolloClient({
  link: new HttpLink({
    uri: 'https://graphqlbackendkafka-env.eba-td22di2h.us-east-1.elasticbeanstalk.com/graphql',
  }),
  cache: new InMemoryCache(),
  shouldBatch: true,
})

// export const client = new ApolloClient({
//   link: new HttpLink({
//     uri: 'https://api.thegraph.com/subgraphs/name/ianlapham/uniswapv2',
//   }),
//   cache: new InMemoryCache(),
//   shouldBatch: true,
// })

export const healthClient = new ApolloClient({
  link: new HttpLink({
    uri: 'https://api.thegraph.com/index-node/graphql',
  }),
  cache: new InMemoryCache(),
  shouldBatch: true,
})

// export const v1Client = new ApolloClient({
//   link: new HttpLink({
//     uri: 'https://api.thegraph.com/subgraphs/name/ianlapham/uniswap',
//   }),
//   cache: new InMemoryCache(),
//   shouldBatch: true,
// })

// export const stakingClient = new ApolloClient({
//   link: new HttpLink({
//     uri: 'https://api.thegraph.com/subgraphs/name/way2rach/talisman',
//   }),
//   cache: new InMemoryCache(),
//   shouldBatch: true,
// })

// export const blockClient = new ApolloClient({
//   link: new HttpLink({
//     uri: 'https://api.thegraph.com/subgraphs/name/blocklytics/ethereum-blocks',
//   }),
//   cache: new InMemoryCache(),
// })
