import {
  ApolloLink,
  FetchResult,
  Observable,
  Operation,
  NextLink,
} from '@apollo/client'

export declare namespace TraceContextLink {
  export interface Options {
    tracestate?: string
  }
}

export declare class TraceContextLink extends ApolloLink {
  private readonly tracestate?: string

  constructor(options: TraceContextLink.Options)

  request(
    operation: Operation,
    forward?: NextLink,
  ): Observable<FetchResult> | null
}
