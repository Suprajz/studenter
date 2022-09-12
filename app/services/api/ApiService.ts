import environment from "../../../config/environment";
import AlertService from "../alert/AlertService";
import ServerResponseError from "../error/error-types/ServerResponseError";

class ApiService {
  private static instance: ApiService;
  private API_URL: string = `${environment.api.protocol}://${environment.api.host}${environment.api.version}`;

  private constructor() {}

  public async get<T>(url: string, headers?: any, customErrorHandler?: (response: any) => void): Promise<T> {
    return this.api(url, { headers, method: "GET" }, customErrorHandler).then((res) => res);
  }

  private async api(url: string, options: RequestInit, customErrorHandler?: (response: any) => void): Promise<any> {
    const errorHandler = customErrorHandler || this.defaultErrorHandler;
    return fetch(this.API_URL + url, {
      ...options,
      headers: { ...(this.getHeaders(options.headers) as HeadersInit), ...options.headers },
    })
      .then(async (res: Response) => {
        return res
          .text()
          .then((text) => (!!text.length ? JSON.parse(text) : JSON.stringify(res)))
          .then((parsed) => {
            if (res.status !== 200 && res.status !== 201) {
              errorHandler(parsed);
              console.log(res.status);
              return null;
            }
            return parsed;
          });
      })
      .catch((error) => {
        throw new ServerResponseError(error);
      });
  }

  private defaultErrorHandler(response: any) {
    AlertService.danger(response.message || "Server Error");
  }

  private getHeaders(headers: any): HeadersInit_ {
    let headerss = headers || {};
    headerss["Content-Type"] = "application/json";
    return headerss;
  }

  public static getInstance(): ApiService {
    if (!ApiService.instance) {
      ApiService.instance = new ApiService();
    }
    return ApiService.instance;
  }
}

const ApiBase = ApiService.getInstance();

export default ApiBase;
