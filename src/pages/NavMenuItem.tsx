import React, {memo, useCallback} from "react";
import {editIcon, TableCellButton, TableCellCheckbox, TableCellIconButton, TableCellText} from "./utils";
import {ButtonBase, TableRow} from "@mui/material";

interface NavMenuItemProps {
    id: string,
    secondary?: string,
    checked?: boolean,
    onCheck?: (id: string, checked: boolean) => void,
    onClick?: (id: string) => void,
    onEdit?: (id: string) => void,
}

const NavMenuItem = (
    {
        id = "",
        secondary,
        checked,
        onCheck,
        onClick,
        onEdit,
    }: NavMenuItemProps) => {
    const handleCheck = useCallback((checked: boolean) => {
        onCheck?.(id, checked);
    }, [onCheck]);

    const handleClick = useCallback(() => {
        onClick?.(id);
    }, [onClick]);

    const handleEdit = useCallback(() => {
        onEdit?.(id);
    }, [onEdit]);

    return (
        <TableRow selected={checked} onClick={handleClick} hover>
            <TableCellCheckbox checked={checked} onChange={handleCheck}/>
            <TableCellText primary={id}/>
            {/*<TableCellText primary={id}/>*/}
            {/*<TableCellButton primary={id} secondary={secondary} onClick={handleClick}/>*/}
            {/*<TableCellButton primary={id} secondary={secondary} onClick={handleClick}/>*/}
            <TableCellIconButton icon={editIcon} onClick={handleEdit}/>
        </TableRow>
    );
}

export default memo(NavMenuItem);
