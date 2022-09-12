import Toast, { ToastShowParams } from "react-native-toast-message";
import Alert, { AlertProps } from "../../components/base/molecules/Alert";

class AlertService {
  public toastConfig = {
    basic: (toastProps: ToastShowParams) => Alert(toastProps.props),
  };

  public success(message: string, onPress?: () => void, title?: string | null, options?: AlertOptions | null) {
    return this.show({ text: message, className: "alertSuccess", title, onPress }, options);
  }

  public warning(message: string, onPress?: () => void | null, title?: string | null, options?: AlertOptions | null) {
    return this.show({ text: message, className: "alertWarning", title, onPress }, options);
  }

  public danger(message: string, onPress?: () => void, title?: string | null, options?: AlertOptions | null) {
    return this.show({ text: message, className: "alertDanger", title, onPress }, options);
  }

  public info(message: string, onPress?: () => void, title?: string | null, options?: AlertOptions | null) {
    return this.show({ text: message, className: "alertInfo", title, onPress }, options);
  }

  private show(props: AlertProps, options?: AlertOptions | null) {
    options = options || {};
    Toast.show({
      ...this.defaultToastOptions,
      ...options,
      props,
    });
  }

  private defaultToastOptions: ToastShowParams = {
    autoHide: true,
    type: "basic",
    visibilityTime: 3000,
    onPress: () => Toast.hide(),
    topOffset: 60,
  };
}

export interface AlertOptions {
  autoHide?: boolean;
  visibilityTime?: number;
  position?: "top" | "bottom";
  topOffset?: number;
  bottomOffset?: number;
}

export default new AlertService();
