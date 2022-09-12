import AlertService from "../../alert/AlertService";
import Connection from "../../connection/ConnectionService";
import ServerResponseError from "../error-types/ServerResponseError";

class ErrorHandler {
  public async handle(error: Error) {
    if (error instanceof ServerResponseError && Connection.isConnectedToInternet()) {
      AlertService.danger("No response from server", undefined, null);
    }
    this.logError(error);
  }

  private async logError(error: Error | string) {
    console.log("ERROR -> ", error);
    //api call to sentry;
  }
}

export default new ErrorHandler();
