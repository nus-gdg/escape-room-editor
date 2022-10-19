import {Button, Dialog, DialogActions, DialogContent, DialogTitle} from "@mui/material";
import {memo} from "react";
import {TextBox} from "../forms";
import "./Dialog.css";

interface RoomDialogProps {
    open: boolean;
    onClose?: (value?: string) => void;
}

const RoomDialog = (
    {
        open,
        onClose = undefined,
    }: RoomDialogProps) => {
    function openDialog() {

    }

    const handleCancel = () => {
        onClose?.();
    }

    const handleOk = () => {
        onClose?.();
    }

    return (
        <Dialog open={open}>
            <DialogTitle>Room Settings</DialogTitle>
            <DialogContent>
                <TextBox label={"Title"} />
            </DialogContent>
            <DialogActions>
                <Button onClick={handleCancel}>Cancel</Button>
                <Button onClick={handleOk}>Ok</Button>
            </DialogActions>
        </Dialog>
    )
}

export default memo(RoomDialog);
