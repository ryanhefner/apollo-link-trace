import { ApolloLink } from '@apollo/client'
import { v4 as uuidv4 } from 'uuid'

export class TraceContextLink extends ApolloLink {
  constructor(options) {
    super()

    const { tracestate } = options ?? {}

    this.tracestate = tracestate ?? ''
  }

  request(operation, forward) {
    const traceId = uuidv4()
    const spanId = uuidv4()

    operation.setContext(({ headers = {} }) => ({
      headers: {
        ...headers,
        traceparent: `00-${traceId}-${spanId}-01`,
        tracestate: headers.tracestate ?? this.tracestate,
      },
    }))

    return forward(operation)
  }
}
