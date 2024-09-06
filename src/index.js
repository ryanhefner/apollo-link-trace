import { ApolloLink } from '@apollo/client'
import { v4 as uuidv4 } from 'uuid'

export class TraceContextLink extends ApolloLink {
  constructor(options) {
    super()

    const { tracestate, tracestateCallback } = options ?? {}

    this.tracestate = tracestate ?? ''
    this.tracestateCallback = tracestateCallback
  }

  request(operation, forward) {
    const traceId = uuidv4().replace(/-/g, '').toLowerCase()
    const spanId = uuidv4().split('-')[0].toLowerCase()

    const tracestate = this.tracestateCallback
      ? this.tracestateCallback({ traceId, spanId })
      : (headers.tracestate ?? this.tracestate)

    operation.setContext(({ headers = {} }) => ({
      headers: {
        ...headers,
        traceparent: `00-${traceId}-${spanId}-01`,
        tracestate,
      },
    }))

    return forward(operation)
  }
}
