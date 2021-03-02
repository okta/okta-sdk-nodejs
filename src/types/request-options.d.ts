import { RequestInit } from 'node-fetch';

export default interface RequestOptions extends RequestInit {
  startTime?: Date
}
