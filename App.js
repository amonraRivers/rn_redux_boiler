/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from "react";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import { Navigation } from "react-native-navigation";
import { createLogger } from "redux-logger";
import thunk from "redux-thunk";
import reducers from "./src/ducks/reducers";
import { persistStore, persistReducer } from "redux-persist";
import { registerScreens, registerScreenVisibilityListener } from "./screens";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web and AsyncStorage for react-native
import * as tabIcons from "./appIcons";

let middleware = [thunk];
if (__DEV__) {
  const logger = createLogger({
    // ...options
  });
  middleware = [...middleware, logger];
}
const persistConfig = {
  key: "root",
  storage
};

function startApp() {
  console.log("algo");
  const persistedReducer = persistReducer(persistConfig, reducers);
  const store = createStore(
    persistedReducer,
    {},
    applyMiddleware(...middleware)
  );
  const persistor = persistStore(store, null, () => {
    registerScreens(store, Provider);
    registerScreenVisibilityListener(store);
    tabIcons.populateIcons().then(() => {
      let appTabs = tabs.map(e => {
        console.log(e.iconTitle, tabIcons[e.iconTitle + "Off"]);
        e.icon = tabIcons[e.iconTitle + "Off"];
        e.selectedIcon = tabIcons[e.iconTitle + "On"];
        return e;
      });
      Navigation.startTabBasedApp({
        tabs: appTabs,
        drawer
      });
    });
  });
  return { store, persistor };
}
const tabs = [
  {
    label: "One",
    screen: "example.view1",
    title: "2",
    iconTitle: "view1"
  },
  {
    label: "two",
    screen: "example.view2",
    title: "3",
    iconTitle: "view1"
  }
];
const drawer = {
  left: {
    label: "three",
    screen: "example.view1",
    title: "hola"
  }
};

startApp();
