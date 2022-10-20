import React, {memo, useCallback} from "react";
import {ListItemButton, ListItemText} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import {NavMenuButton, NavMenuCheckbox} from "./utils";

interface NavMenuItemProps {
    id: string,
    onClick?: (id: string) => void,
    onCheck?: (id: string, checked: boolean) => void,
    onEditAction?: (id: string) => void,
}

const NavMenuItem = (
    {
        id = "",
        onClick,
        onCheck,
        onEditAction,
    }: NavMenuItemProps) => {
    const handleClick = useCallback((event: React.MouseEvent) => {
        event.stopPropagation();
        onClick?.(id);
    }, [onClick]);

    const handleCheck = useCallback((checked: boolean) => {
        onCheck?.(id, checked);
    }, [onCheck]);

    const handleEditAction = useCallback(() => {
        onEditAction?.(id);
    }, [onEditAction]);

    return (
        <ListItemButton onClick={handleClick} disableRipple>
            <NavMenuCheckbox onChange={handleCheck}/>
            <ListItemText primary={id}/>
            <NavMenuButton icon={<EditIcon/>} onClick={handleEditAction}/>
        </ListItemButton>
    );
}

export default memo(NavMenuItem);
