import React, {memo} from "react";
import {ListItem, ListItemText} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import {NavMenuButton, NavMenuCheckbox} from "./utils";

interface NavMenuHeaderProps {
    label: string,
    variant?: "add" | "delete",
    onCheck?: (checked: boolean) => void,
    onAddAction?: () => void,
    onDeleteAction?: () => void,
}

const NavMenuHeader = (
    {
        label = "",
        variant,
        onCheck,
        onAddAction,
        onDeleteAction,
    }: NavMenuHeaderProps) => {
    return (
        <ListItem>
            <NavMenuCheckbox onChange={onCheck}/>
            <ListItemText primary={label}/>
            {variant === "add" && <NavMenuButton icon={<AddIcon/>} onClick={onAddAction}/>}
            {variant === "delete" && <NavMenuButton icon={<DeleteIcon/>} onClick={onDeleteAction}/>}
        </ListItem>
    );
}

export default memo(NavMenuHeader);
