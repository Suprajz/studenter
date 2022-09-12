import { NetInfoState } from "@react-native-community/netinfo";
import AlertService from "../alert/AlertService";

class ConnectionService {
  static instance: ConnectionService;

  public netInfoState: NetInfoState | null = null;

  private constructor() {}

  public connectionListener(state: NetInfoState) {
    if (!!this.netInfoState && this.netInfoState.isInternetReachable !== state.isInternetReachable) {
      this.isConnectedToInternet(state);
    }
    this.setNetInfoState(state);
  }

  public isConnectedToInternet(netInfoState?: NetInfoState): boolean {
    const netState = netInfoState || this.netInfoState;
    if (!netState) {
      return true;
    }
    if (!netState.isInternetReachable) {
      AlertService.danger("No internet connection", undefined, null, { position: "bottom" });
      return false;
    }
    return true;
  }

  private setNetInfoState(netInfoState: NetInfoState): void {
    this.netInfoState = netInfoState;
  }

  public getNetInfoState(): NetInfoState | null {
    return this.netInfoState;
  }

  public static getInstance() {
    if (!ConnectionService.instance) {
      ConnectionService.instance = new ConnectionService();
    }
    return ConnectionService.instance;
  }
}

const Connection = ConnectionService.getInstance();

export default Connection;
