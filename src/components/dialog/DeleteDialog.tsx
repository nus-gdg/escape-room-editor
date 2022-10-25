import {Button, Dialog, DialogActions, DialogContent, DialogTitle} from "@mui/material";
import React, {memo, useCallback} from "react";
import "./Dialog.css";

interface DeleteDialogProps {
    label?: string,
    message?: string,
    open: boolean,
    onClose?: (confirmed?: boolean) => void,
}

const DeleteDialog = (
    {
        label = "Confirm Deletion",
        message = "Are you sure you want to delete these items?",
        open,
        onClose,
    }: DeleteDialogProps) => {

    const handleCancel = useCallback(() => {
        onClose?.(false);
    }, []);

    const handleOk = useCallback(() => {
        onClose?.(true);
    }, []);

    return (
        <Dialog open={open}>
            <DialogTitle>{label}</DialogTitle>
            <DialogContent>{message}</DialogContent>
            <DialogActions>
                <Button onClick={handleCancel}>Cancel</Button>
                <Button onClick={handleOk}>Ok</Button>
            </DialogActions>
        </Dialog>
    )
}

export default memo(DeleteDialog);
