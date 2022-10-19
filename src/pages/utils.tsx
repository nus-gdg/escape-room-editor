import React, {memo, useCallback, useState} from "react";
import "./Dialog.css";
import {ButtonProps, DialogProps, IconButton} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

interface ButtonWithDialogProps {
    Button: React.ComponentType<ButtonProps>,
    Dialog: React.ComponentType<DialogProps>,
}

export const ButtonWithDialog = memo(({Button, Dialog} : ButtonWithDialogProps) => {
    const [open, setOpen] = useState(false);

    const handleClick = useCallback((event: React.MouseEvent) => {
        event.stopPropagation();
        setOpen(true);
    }, []);

    return (
        <>
            <Button onClick={handleClick}>TEST</Button>
            {open && <Dialog open={open}>CAKE</Dialog>}
        </>
    )
});

const AddAction

const AddButton = () => {
    return (
        <IconButton onClick={handleDeleteAction}>
            <AddIcon/>
        </IconButton>
    )
}

const AddDialog = () => {
    return (
        <IconButton onClick={handleDeleteAction}>
            <AddIcon/>
        </IconButton>
    )
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

