import React, { Component } from "react";
import ToolbarIcon, {
  markDecorator,
  markPlugin
} from "@tracoco/slate-icon-shared";
import { CODE } from "@tracoco/slate-constant/lib/marks";

export const CodePlugin = opt => {
  const options = Object.assign(
    {
      type: CODE,
      tagName: "code"
    },
    opt
  );

  return markPlugin(options, "cmd+`");
};

@markDecorator(CODE, "Code")
export default class Code extends Component {
  render() {
    return <ToolbarIcon {...this.props} />;
  }
}
