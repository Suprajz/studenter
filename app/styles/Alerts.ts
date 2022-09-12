import Colors from "../constants/Colors";
import { StyleSheet } from "react-native";

export const AlertStyles = StyleSheet.create<IAlertStyles>({
  alert: {
    width: "90%",
    padding: 10,
    borderRadius: 10,
    borderWidth: 2,
    alignSelf: "center",
  },
  alertSuccess: {
    borderColor: Colors.green,
    backgroundColor: Colors.lightGreen,
  },
  alertWarning: {
    borderColor: Colors.yellow,
    backgroundColor: Colors.lightYellow,
  },
  alertDanger: {
    borderColor: Colors.pink,
    backgroundColor: Colors.lightPink,
  },
  alertInfo: {
    borderColor: Colors.navyBlue,
    backgroundColor: Colors.blue,
  },
});

export interface IAlertStyles {
  alert: any;
  alertSuccess: any;
  alertWarning: any;
  alertDanger: any;
  alertInfo: any;
}
