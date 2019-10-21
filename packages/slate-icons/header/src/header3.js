// @flow
import React, { Component } from "react";
import ToolbarIcon from "@tracoco/slate-icon-shared";
import { HEADING_3 } from "@tracoco/slate-constant/lib/blocks";
import headerDecorator from "./headerDecorator";

@headerDecorator(HEADING_3, "Header3")
export default class Heading3 extends Component<{}> {
  render() {
    return <ToolbarIcon {...this.props} />;
  }
}
