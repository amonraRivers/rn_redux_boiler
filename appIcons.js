import Icon from "react-native-vector-icons/Ionicons";
import IconAw from "react-native-vector-icons/FontAwesome";
import { Platform } from "react-native";

export var view1On;
export var view1Off;
export var view2On;
export var view2Off;
export var view3On;
export var view3Off;
export var view4On;
export var view4Off;

export function populateIcons() {
  return new Promise(function(resolve, reject) {
    Promise.all([
      Icon.getImageSource(
        Platform.select({
          ios: "ios-restaurant",
          android: "md-restaurant"
        }),
        30
      ),
      IconAw.getImageSource("calendar", 30)
    ])
      .then(values => {
        view1On = values[0];
        view1Off = values[0];
        view2On = values[1];
        view2Off = values[1];

        resolve(true);
      })
      .catch(error => {
        console.log(error);
        reject(error);
      })
      .done();
  });
}
