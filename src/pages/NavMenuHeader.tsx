import React, {memo, useState} from "react";
import {Checkbox, IconButton, ListItem, ListItemText} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import {ButtonWithDialog} from "./utils";

interface NavMenuHeaderButtonProps {
    showDelete: boolean,
    onAddAction?: () => void,
    onDeleteAction?: () => void,
}

const NavMenuHeaderButton = memo((
    {
        showDelete,
        onAddAction,
        onDeleteAction,
    } : NavMenuHeaderButtonProps) => {

    function handleAddAction(event: React.MouseEvent<HTMLElement>) {
        event.stopPropagation();
        onAddAction?.();
    }

    function handleDeleteAction(event: React.MouseEvent<HTMLElement>) {
        event.stopPropagation();
        onDeleteAction?.();
    }

    if (showDelete) {
        return (
            <IconButton onClick={handleDeleteAction}>
                <DeleteIcon/>
            </IconButton>
        );
    } else {
        return (
            <IconButton onClick={handleAddAction}>
                <AddIcon/>
            </IconButton>
        );
    }
});

interface NavMenuHeaderProps {
    label: string,
    showDelete?: boolean
    onSelectAll?: () => void,
    onAddRequest?: () => void,
    onDeleteRequest?: () => void,
}

const NavMenuHeader = (
    {
        label = "",
        showDelete = false,
        onSelectAll,
        onAddRequest,
        onDeleteRequest,
    }: NavMenuHeaderProps) => {
    // const [selected, setSelected] = useState<string[]>([]);

    function handleSelectAll(event: React.MouseEvent<HTMLElement>) {
        event.stopPropagation();
        onSelectAll?.();
    }

    function handleAddRequest(event: React.MouseEvent<HTMLElement>) {
        event.stopPropagation();
        onAddRequest?.();
    }

    // function handleDeleteRequest(event: React.MouseEvent<HTMLElement>) {
    //     event.stopPropagation();
    //     onDeleteRequest?.();
    // }

    const renderButton = (showDelete: boolean) => {
        if (showDelete) {
            return (
                <IconButton onClick={handleAddRequest}>
                    <DeleteIcon/>
                </IconButton>
            );
        } else {
            return (
                <IconButton onClick={handleAddRequest}>
                    <AddIcon/>
                </IconButton>
            );
        }
    }

    const AddButton = () => {
        const button = (
            <IconButton onClick={handleDeleteAction}>
                <AddIcon/>
            </IconButton>
        )
        const dialog = (
            <IconButton onClick={handleDeleteAction}>
                <AddIcon/>
            </IconButton>
        )
        return ButtonWithDialog(button, dialog);
    }

    return (
        <ListItem>
            <Checkbox onClick={handleSelectAll} disableRipple/>
            <ListItemText primary={label}/>
            <NavMenuHeaderButton
                showDelete={showDelete}
                onAddAction={onAddRequest}
                onDeleteAction={onDeleteRequest}
            />
        </ListItem>
    );
}

export default memo(NavMenuHeader);
