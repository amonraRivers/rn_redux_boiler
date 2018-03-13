/**
 * Sample React Native View4
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from "react";
import { Platform, StyleSheet, Text, View, Button } from "react-native";
import { Navigation } from "react-native-navigation";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

const instructions = Platform.select({
  ios: "Press Cmd+R to reload,\n" + "Cmd+D or shake for dev menu",
  android:
    "Double tap R on your keyboard to reload,\n" +
    "Shake or press menu button for dev menu"
});

type Props = {};
class View4 extends Component<Props> {
  tabs = [
    {
      label: "one",
      screen: "example.view1",
      title: "2"
    },
    {
      label: "two",
      screen: "example.view2",
      title: "3"
    }
  ];
  constructor(props) {
    super(props);
    this.onPressLearnMore = this.onPressLearnMore.bind(this);
  }
  componentDidMount() {
    //console.log("View4 mounted");
  }
  compoonentWillUnmount() {
    //console.log("View4 unMounted");
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native!</Text>
        <Text style={styles.instructions}>To get started, edit View4.js</Text>
        <Text style={styles.instructions}>{instructions}</Text>
        <Button
          onPress={this.onPressLearnMore}
          title="Learn More"
          color="#841584"
        />
      </View>
    );
  }
  onPressLearnMore() {
    Navigation.startTabBasedApp({
      tabs: this.tabs
    });
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  }
});

import actions from "./ducks/actions";

function mapStateToProps(state, ownProps) {
  return {
    state: state
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(View4);
