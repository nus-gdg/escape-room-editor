import React, {memo, useCallback} from "react";
import {Checkbox, IconButton, ListItemButton, ListItemText} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";

interface NavMenuItemProps {
    id: string,
    onSelect?: (id: string, checked: boolean) => void,
    onClick?: (id: string) => void,
    onEditRequest?: (id: string) => void,
}

const NavMenuItem = (
    {
        id = "",
        onSelect,
        onClick,
        onEditRequest,
    }: NavMenuItemProps) => {
    const handleSelect = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        event.stopPropagation();
        onSelect?.(id, event.target.checked);
    }, [onSelect]);

    const handleClickCheckbox = useCallback((event: React.MouseEvent) => {
        event.stopPropagation();
    }, []);

    const handleClickButton = useCallback((event: React.MouseEvent) => {
        event.stopPropagation();
        onClick?.(id);
    }, [onClick]);

    const handleEditRequest = useCallback((event: React.MouseEvent) => {
        event.stopPropagation();
        onEditRequest?.(id);
    }, [onEditRequest]);

    return (
        <ListItemButton onClick={handleClickButton} disableRipple>
            <Checkbox onClick={handleClickCheckbox} onChange={handleSelect} disableRipple/>
            <ListItemText primary={id}/>
            <IconButton onClick={handleEditRequest}>
                <EditIcon/>
            </IconButton>
        </ListItemButton>
    );
}

export default memo(NavMenuItem);
