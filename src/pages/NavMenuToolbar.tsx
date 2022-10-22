import React, {memo} from "react";
import {addIcon, deleteIcon, editIcon, SimpleIconButton} from "./utils";
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
            <div style={{display: "flex", flexDirection: "row", alignItems: "center", paddingLeft: "11px", backgroundColor: "cornflowerblue"}}>
                <Typography style={{flexGrow: 1}}>{label}... ({selected.size} selected)</Typography>
                <IconButton onClick={handleDelete}>
                    {deleteIcon}
                </IconButton>
            </div>
        )
    } else {
        return (
            <div style={{display: "flex", flexDirection: "row", alignItems: "center", paddingLeft: "11px", backgroundColor: "darkslategrey",}}>
                <Typography style={{flexGrow: 1}}>{label}</Typography>
                <IconButton onClick={onAdd}>
                    {addIcon}
                </IconButton>
            </div>
        )
    }
}

export default memo(NavMenuToolbar);
