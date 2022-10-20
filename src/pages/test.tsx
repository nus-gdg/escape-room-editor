// import React, {memo, useCallback, useState} from "react";
// import NavMenuHeader from "./NavMenuHeader";
// import {RoomData} from "../rooms";
// import {OnCloseParams as OnCloseRoomDialogParams} from "./RoomDialog";
// import {Dialog} from "@mui/material";
//
// export interface WithLabelProps {
//     label: string,
// }
//
// function withLabel(label: string) {
//     return <P extends WithLabelProps>(Component: React.ComponentType<P>) => {
//         return (props: Omit<P, keyof WithLabelProps>) => {
//             return <Component {...(props as P)} label={label} />
//         }
//     }
// }
//
// export interface WithDialogProps {
//     open: boolean,
//     onClose?: () => void,
// }
//
// function withDialog(DialogComponent: typeof Dialog) {
//     return <P extends WithDialogProps>(Component: React.ComponentType<P>) => {
//         return (props: Omit<P, keyof WithDialogProps>) => {
//             const [open, setOpen] = useState(false);
//
//             return (
//                 <>
//                     <Component {...(props as P)} />
//                     <DialogComponent open={open} />
//                 </>
//             );
//         }
//     }
// }
//
// const openAddDialog = useCallback(() => {
//     setDialogState({type: "add"});
// }, []);
//
// const openDeleteDialog = useCallback(() => {
//     setDialogState({type: "delete"});
// }, []);
//
// const openEditDialog = useCallback((data: RoomData) => {
//     setDialogState({type: "edit", data: data});
// }, []);
//
// const closeAddDialog = useCallback(({dst}: OnCloseRoomDialogParams) => {
//     if (dst) {
//         onAddItem?.();
//     }
//     setDialogState(null);
// }, []);
export const k = "SAdnajksd";