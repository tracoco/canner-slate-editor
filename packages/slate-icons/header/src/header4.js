// @flow
import React, { Component } from "react";
import ToolbarIcon from "@tracoco/slate-icon-shared";
import { HEADING_4 } from "@tracoco/slate-constant/lib/blocks";
import headerDecorator from "./headerDecorator";

@headerDecorator(HEADING_4, "Header4")
export default class Heading4 extends Component<{}> {
  render() {
    return <ToolbarIcon {...this.props} />;
  }
}
