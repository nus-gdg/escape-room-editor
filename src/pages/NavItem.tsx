import React, {memo, useCallback, useRef} from "react";
import {editIcon, ListCheckbox, TableCellButton, TableCellCheckbox, TableCellIconButton, TableCellText} from "./utils";
import {
    ButtonBase,
    Checkbox, IconButton,
    ListItem,
    ListItemButton, ListItemIcon,
    ListItemSecondaryAction,
    ListItemText,
    TableRow, Typography
} from "@mui/material";
import TouchRipple, {TouchRippleActions, TouchRippleProps} from "@mui/material/ButtonBase/TouchRipple";

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
    const rippleRef = useRef<TouchRippleActions>(null);

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
        <>
            <li style={{display: "inline-flex", flexDirection: "row", position: "relative", userSelect: "none", width: "100%"}}>
                <Checkbox checked={checked} onChange={handleCheck}/>
                <button
                    onClick={handleClick}
                    onMouseDown={event => rippleRef.current?.start(event)}
                    onMouseUp={event => rippleRef.current?.stop(event)}
                    style={{display: "flex", flexDirection: "row", flexGrow: 1, cursor: "pointer", backgroundColor: "transparent"}}
                >
                    <Typography>{id}</Typography>
                    <Typography>{id}</Typography>
                </button>
                <IconButton onClick={handleEdit}>
                    {editIcon}
                </IconButton>
                <TouchRipple ref={rippleRef} center={false}/>
            </li>
            {/*<ListItem selected={checked} onClick={handleClick} disablePadding>*/}
            {/*    <ListItemButton>*/}
            {/*        id*/}
            {/*    </ListItemButton>*/}
            {/*    <ListItemSecondaryAction>*/}
            {/*        <ListCheckbox checked={checked} onChange={handleCheck}/>*/}
            {/*    </ListItemSecondaryAction>*/}
            {/*</ListItem>*/}
            {/*<ListItem button selected={checked} onClick={handleClick}>*/}
            {/*<TableCellCheckbox checked={checked} onChange={handleCheck}/>*/}
            {/*<TableCellText primary={id}/>*/}
            {/*<TableCellText primary={id}/>*/}
            {/*<TableCellButton primary={id} secondary={secondary} onClick={handleClick}/>*/}
            {/*<TableCellButton primary={id} secondary={secondary} onClick={handleClick}/>*/}
            {/*<TableCellIconButton icon={editIcon} onClick={handleEdit}/>*/}
            {/*</ListItem>*/}
        </>
    );
}

export default memo(NavMenuItem);
