import React, {memo} from "react";
import {addIcon, deleteIcon} from "./utils";
import {IconButton, TableRow, Toolbar, Typography} from "@mui/material";

const style = {pl: { sm: 2 }, pr: { xs: 1, sm: 1 }}

interface NavMenuToolbarProps {
    label: string,
    selected?: Set<string>
    onAdd?: () => void,
    onDelete?: (ids: Set<string>) => void,
}

const NavMenuToolbar = (
    {
        label = "",
        selected,
        onAdd,
        onDelete,
    }: NavMenuToolbarProps) => {
    const handleDelete = () => {
        if (selected) {
            onDelete?.(selected);
        }
    }

    if (selected && selected.size > 0) {
        return (
            <Toolbar sx={style}>
                <Typography>{label}... ({selected.size} selected)</Typography>
                <IconButton onClick={handleDelete}>
                    {deleteIcon}
                </IconButton>
            </Toolbar>
        )
    } else {
        return (
            <Toolbar sx={style}>
                <Typography>{label}</Typography>
                <IconButton onClick={onAdd}>
                    {addIcon}
                </IconButton>
            </Toolbar>
        )
    }
}

export default memo(NavMenuToolbar);
