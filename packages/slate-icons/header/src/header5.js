// @flow
import React, { Component } from "react";
import ToolbarIcon from "@tracoco/slate-icon-shared";
import { HEADING_5 } from "@tracoco/slate-constant/lib/blocks";
import headerDecorator from "./headerDecorator";

@headerDecorator(HEADING_5, "Header5")
export default class Heading5 extends Component<{}> {
  render() {
    return <ToolbarIcon {...this.props} />;
  }
}
