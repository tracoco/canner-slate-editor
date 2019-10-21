import React, { Component } from "react";
import pluginListDecorator from "./pluginListDecorator";
import ToolbarIcon from "@tracoco/slate-icon-shared";
import { OL_LIST } from "@tracoco/slate-constant/lib/blocks";

@pluginListDecorator(OL_LIST, "ListOrdered")
export default class OlList extends Component {
  render() {
    return <ToolbarIcon {...this.props} />;
  }
}
