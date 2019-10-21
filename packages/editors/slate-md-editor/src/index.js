// @flow
import * as React from "react";
import type { Value, Change } from "slate";
import { Icon, Modal } from "antd";
import { Editor } from "slate-react";
import EditPrism from "slate-prism";
import EditBlockquote from "slate-edit-blockquote";
import EditList from "slate-edit-list";
import PluginEditCode from "slate-edit-code";
import { DEFAULT as DEFAULT_LIST } from "@tracoco/slate-helper-block-list";
import BLOCKS from "markup-it/lib/constants/blocks";
import MARKS from "markup-it/lib/constants/marks";
import INLINES from "markup-it/lib/constants/inlines";

// blocks
import { BlockquotePlugin } from "@tracoco/slate-icon-blockquote";
import { ListPlugin } from "@tracoco/slate-icon-list";
import { CodeBlockPlugin } from "@tracoco/slate-icon-codeblock";
import { HrPlugin } from "@tracoco/slate-icon-hr";
import { LinkPlugin } from "@tracoco/slate-icon-link";
import { ImagePlugin } from "@tracoco/slate-icon-image";
import {
  HeaderOnePlugin,
  HeaderTwoPlugin,
  HeaderThreePlugin,
  HeaderFourPlugin,
  HeaderFivePlugin,
  HeaderSixPlugin
} from "@tracoco/slate-icon-header";
import { ParagraphPlugin } from "@tracoco/slate-icon-shared";

// marks plugin
import { BoldPlugin } from "@tracoco/slate-icon-bold";
import { CodePlugin } from "@tracoco/slate-icon-code";
import { StrikeThroughPlugin } from "@tracoco/slate-icon-strikethrough";
import { UnderlinePlugin } from "@tracoco/slate-icon-underline";
import { ItalicPlugin } from "@tracoco/slate-icon-italic";

import mdPlugin from "@tracoco/slate-md-plugin";
import copyPastePlugin from "@tracoco/slate-paste-html-plugin";
import "prismjs/themes/prism.css";
import "github-markdown-css";
import HelpMenu from "@tracoco/slate-editor-help";
import styled from "styled-components";

export const MarkdownPlugin = mdPlugin;

const Helper = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 18px;
  cursor: pointer;
  color: #ccc;
`;

export default (opt: { [string]: any } = {}) => {
  const options = Object.assign(
    {
      markdownOption: {
        blocks: Object.assign(BLOCKS, opt.blocks),
        marks: Object.assign(MARKS, opt.marks),
        inlines: Object.assign(INLINES, opt.inlines)
      },
      prismOption: {
        onlyIn: node => node.type === BLOCKS.CODE,
        getSyntax: node => node.data.get("syntax")
      },
      codeOption: {
        onlyIn: node => node.type === BLOCKS.CODE
      },
      blockquoteOption: {},
      listOption: DEFAULT_LIST
    },
    opt
  );

  const mdEditorPlugins = [
    MarkdownPlugin(options.markdownOption),
    EditPrism(options.prismOption),
    PluginEditCode(options.codeOption),
    EditBlockquote(options.blockquoteOption),
    EditList(options.listOption),
    BlockquotePlugin(options.blockquoteOption),
    ListPlugin(options.listOption),
    CodeBlockPlugin(options.codeOption),
    HrPlugin(),
    LinkPlugin(),
    ImagePlugin(),
    HeaderOnePlugin(),
    HeaderTwoPlugin(),
    HeaderThreePlugin(),
    HeaderFourPlugin(),
    HeaderFivePlugin(),
    HeaderSixPlugin(),
    ParagraphPlugin(),
    BoldPlugin(),
    CodePlugin(),
    StrikeThroughPlugin(),
    UnderlinePlugin(),
    ItalicPlugin(),
    copyPastePlugin()
  ];

  type Props = {
    value: Value,
    onChange: (change: Change) => void
  };

  type State = {
    showMenu: boolean
  };

  return class MdEditor extends React.Component<Props, State> {
    constructor(props) {
      super(props);
      this.plugins = [...mdEditorPlugins, ...(this.props.plugins || [])];
    }

    state = {
      showMenu: false
    };

    changeVisibleMenu = (visible: boolean) => {
      this.setState({ showMenu: visible });
    };

    render() {
      const { showMenu } = this.state;
      const { value, onChange, plugins, ...rest } = this.props; // eslint-disable-line
      return (
        <div className="markdown-body" style={{ position: "relative" }}>
          <Editor
            value={value}
            plugins={this.plugins}
            onChange={onChange}
            {...rest}
          />
          <Helper onClick={() => this.changeVisibleMenu(true)}>
            <Icon type="question-circle" theme="outlined" />
            <span style={{ fontSize: "15px", marginLeft: "5px" }}>Help</span>
          </Helper>
          <Modal
            visible={showMenu}
            style={{ width: "800px" }}
            footer={null}
            onCancel={() => this.changeVisibleMenu(false)}
            title="Help Menu"
          >
            <HelpMenu />
          </Modal>
        </div>
      );
    }
  };
};
