/* @flow */

import React, { Component } from "react";

import { View } from "react-native";

export default class pufHeader extends Component {
  constructor(props) {
    super(props);
    console.log("header props ", props);
    this.renderCenter = this.renderCenter.bind(this);
    this.renderLeft = this.renderLeft.bind(this);
    this.renderRight = this.renderRight.bind(this);
  }

  renderRight() {
    let child = this.props.right;
    if (this.props.right) {
      if (typeof child === "function") {
        child = child();
      }
      return (
        <View style={{ alignSelf: "center", alignItems: "flex-end", flex: 1 }}>
          {child}
        </View>
      );
    }
    return <View style={{ alignSelf: "center", flex: 1 }}>{null}</View>;
  }
  renderLeft() {
    let child = this.props.left;
    if (this.props.left) {
      if (typeof child === "function") {
        child = child();
      }
      return (
        <View
          style={{ alignSelf: "center", alignItems: "flex-start", flex: 1 }}
        >
          {child}
        </View>
      );
    }
    return <View style={{ alignSelf: "center", flex: 1 }}>{null}</View>;
  }
  renderCenter() {
    let child = this.props.center;
    if (this.props.center) {
      if (typeof child === "function") {
        child = child();
      }
      return (
        <View style={{ alignSelf: "center", alignItems: "center", flex: 3 }}>
          {child}
        </View>
      );
    }
    return <View style={{ alignSelf: "center", flex: 3 }}>{null}</View>;
  }
  render() {
    return (
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          justifyContent: "space-between"
        }}
      >
        {this.renderLeft()}
        {this.renderCenter()}
        {this.renderRight()}
      </View>
    );
  }
}
