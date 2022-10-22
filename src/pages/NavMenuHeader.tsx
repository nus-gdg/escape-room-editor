import React, {memo} from "react";
import {TableCellCheckbox, TableCellIconButton, TableCellText} from "./utils";
import {TableRow} from "@mui/material";

const renderColumn = (column: string) => <TableCellText key={column} primary={column}/>

interface NavMenuHeaderProps {
    columns?: string[],
    checked?: boolean,
    indeterminate?: boolean,
    onCheck?: (checked: boolean) => void,
}

const NavMenuHeader = (
    {
        columns,
        checked,
        indeterminate,
        onCheck,
    }: NavMenuHeaderProps) => {
    return (
        <TableRow>
            <TableCellCheckbox checked={checked} indeterminate={indeterminate} onChange={onCheck}/>
            {columns && columns.map(renderColumn)}
        </TableRow>
    );
}

export default memo(NavMenuHeader);
