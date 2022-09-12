export default class ServerResponseError extends Error {
  data: any;

  constructor(message: string, data?: any) {
    super();
    this.message = message;
    this.data = data;
    this.name = "ServerResponseError";
  }
}
