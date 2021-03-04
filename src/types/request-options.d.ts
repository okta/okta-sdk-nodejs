import { RequestInit } from 'node-fetch';

/** An extension of node-fetch's request options. */
export default interface RequestOptions extends RequestInit {
  startTime?: Date
}
