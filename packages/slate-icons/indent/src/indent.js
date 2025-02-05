// @flow
import React, { Component } from "react";
import ToolbarIcon from "@tracoco/slate-icon-shared";
import indentDecorator from "./indentDecorator";

@indentDecorator("indent", "Indent")
export default class Indent extends Component<{}> {
  render() {
    return <ToolbarIcon {...this.props} />;
  }
}
