declare interface Request {
  api<T>(url: string): Promise<T>;
}

export default Request;