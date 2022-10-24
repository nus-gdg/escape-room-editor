// import {Button, Dialog, DialogActions, DialogContent, DialogTitle} from "@mui/material";
// import React, {memo, useCallback, useEffect, useState} from "react";
// import {TextBox} from "../forms";
// import {RoomData} from "../rooms";
// import "./Dialog.css";
//
// const defaultRoom: RoomData = {
//     id: "ad",
//     title: "Room",
// }
//
// export interface OnCloseParams {
//     src?: RoomData,
//     dst?: RoomData,
// }
//
// interface RoomDialogProps {
//     open: boolean,
//     onClose?: (params: OnCloseParams) => void,
//     label?: string,
//     data?: RoomData,
// }
//
// const RoomDialog = (
//     {
//         open,
//         onClose,
//         label = "Room",
//         data,
//     }: RoomDialogProps) => {
//     const [newRoom, setNewRoom] = useState(data ?? defaultRoom);
//
//     useEffect(() => {
//         setNewRoom(data ?? defaultRoom)
//     }, [data]);
//
//     const handleCancel = useCallback(() => {
//         onClose?.({src: data});
//     }, []);
//
//     const handleOk = useCallback(() => {
//         onClose?.({src: data, dst: newRoom});
//     }, []);
//
//     const editTitle = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
//         setNewRoom(newRoom => ({...newRoom, title: event.target.value}));
//     }, []);
//
//     return (
//         <Dialog open={open}>
//             <DialogTitle>Room Settings</DialogTitle>
//             <DialogContent>
//                 <TextBox label={"Title"} value={newRoom.title} onChange={editTitle}/>
//             </DialogContent>
//             <DialogActions>
//                 <Button onClick={handleCancel}>Cancel</Button>
//                 <Button onClick={handleOk}>Ok</Button>
//             </DialogActions>
//         </Dialog>
//     )
// }
//
// export default memo(RoomDialog);

export const afasf = 45;
