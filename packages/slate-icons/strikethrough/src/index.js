import React, { Component } from "react";
import ToolbarIcon, {
  markDecorator,
  markPlugin
} from "@tracoco/slate-icon-shared";
import { STRIKETHROUGH } from "@tracoco/slate-constant/lib/marks";

export const StrikeThroughPlugin = opt => {
  const options = Object.assign(
    {
      type: STRIKETHROUGH,
      tagName: "s"
    },
    opt
  );

  return markPlugin(options, "ctrl+opt+d");
};

@markDecorator(STRIKETHROUGH, "Strike")
export default class StrikeThrough extends Component {
  render() {
    return <ToolbarIcon {...this.props} />;
  }
}
