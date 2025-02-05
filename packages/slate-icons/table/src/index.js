// @flow
import * as React from "react";
import type { IconProps } from "shared/src/types";
import TablePicker, { nodeAttrs } from "create-table-picker";
import ToolbarIcon from "@tracoco/slate-icon-shared";
import {
  TABLE,
  TABLE_ROW,
  TABLE_CELL
} from "@tracoco/slate-constant/lib/blocks";
import EditTable from "slate-edit-table";
import {
  tableNode,
  tableRowNode,
  tableCellNode
} from "@tracoco/slate-editor-renderer/lib/tableNode";
import type { Data } from "react-hovertable";
import omit from "lodash.omit";

export const TablePlugin = opt => {
  const options = Object.assign(
    {
      typeTable: TABLE,
      typeRow: TABLE_ROW,
      typeCell: TABLE_CELL,
      ...nodeAttrs
    },
    opt
  );

  return {
    renderNode: props => {
      if (props.node.type === options.typeTable)
        return tableNode(options)(props);
      else if (props.node.type === options.typeRow)
        return tableRowNode()(props);
      else if (props.node.type === options.typeCell)
        return tableCellNode(
          omit(options, ["typeTable", "typeRow", "typeCell"])
        )(props);
    }
  };
};

export default class Table extends React.Component<IconProps> {
  typeName: string;
  constructor(props: IconProps) {
    super(props);
    this.typeName = this.props.typeTable || TABLE;

    this.editTable = EditTable(this.props.options || {});
  }

  onChange = (data: Data) => {
    let { change, onChange } = this.props;
    onChange(
      this.editTable.changes.insertTable(
        change,
        data.columnNumber + 1,
        data.rowNumber + 1
      )
    );
  };

  render() {
    const { icon, ...rest } = this.props;

    return (
      <TablePicker style={{ zIndex: 1000 }} onChange={this.onChange}>
        <ToolbarIcon
          type={this.typeName}
          icon={icon || "Table"}
          isActive={false}
          {...rest}
        />
      </TablePicker>
    );
  }
}
