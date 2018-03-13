import { Navigation, ScreenVisibilityListener } from "react-native-navigation";
import nav from "./src/ducks/actions";
import View1 from "./src/view1";
import View2 from "./src/view2";
import View3 from "./src/view3";
import View4 from "./src/view4";
import NativeHeader from "./src/components/nativeHeader";

export function registerScreens(store, Provider) {
  Navigation.registerComponent("example.view1", () => View1, store, Provider);
  Navigation.registerComponent("example.view2", () => View2, store, Provider);
  Navigation.registerComponent("example.view3", () => View3, store, Provider);
  Navigation.registerComponent("example.view4", () => View4, store, Provider);
  Navigation.registerComponent(
    "example.header",
    () => NativeHeader,
    store,
    Provider
  );
}

export function registerScreenVisibilityListener(store) {
  new ScreenVisibilityListener({
    didAppear: props => {
      store.dispatch(nav.screenDA(props.screen));
      // console.log(
      //   "screenVisibilityDA",
      //   `Screen ${props.screen} displayed in ${props.endTime -
      //     props.startTime} millis after [${props.commandType}]`
      // );
    },
    willAppear: props => {
      //console.log("nav", nav);
      store.dispatch(nav.screenWA(props.screen));
    }
  }).register();
}
