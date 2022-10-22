// import React, {memo, useCallback, useEffect, useState} from "react";
// import {Divider, List} from "@mui/material";
// import NavMenuHeader from "./NavMenuHeader";
// import NavMenuItem from "./NavMenuItem";
// import RoomDialog, {OnCloseParams as OnCloseRoomDialogParams} from "./RoomDialog";
// import NavMenuDivider from "./NavMenuDivider";
// import {RoomData} from "../rooms";
// import DeleteDialog from "./DeleteDialog";
// import {DialogState} from "./utils";
//
// interface RoomsMenuProps {
//     rooms: Record<string, RoomData>,
//     onClickItem?: () => void,
//     onAddItem?: () => void,
//     onEditItem?: () => void,
//     onDeleteItems?: () => void,
// }
//
// const RoomsMenu = (
//     {
//         rooms,
//         onClickItem = () => console.log("click"),
//         onAddItem = () => console.log("add"),
//         onEditItem = () => console.log("edit"),
//         onDeleteItems = () => console.log("delete"),
//     }: RoomsMenuProps) => {
//     const [selected, setSelected] = useState(new Set<string>());
//     const [dialogState, setDialogState] = useState<DialogState<RoomData> | null>(null);
//
//     const clickItem = useCallback((room: RoomData) => {
//         onClickItem?.();
//     }, []);
//
//     const selectItem = useCallback((room: RoomData, checked: boolean) => {
//         setSelected(set => {
//             const nextSet = new Set(set);
//             if (checked) {
//                 nextSet.add(room.id);
//             } else {
//                 nextSet.delete(room.id);
//             }
//             return nextSet;
//         });
//     }, []);
//
//     const selectItems = useCallback((checked: boolean) => {
//         if (checked) {
//             setSelected(new Set(Object.keys(rooms)));
//         } else {
//             setSelected(new Set());
//         }
//     }, [rooms]);
//
//     const openAddDialog = useCallback(() => {
//         setDialogState({type: "add"});
//     }, []);
//
//     const openDeleteDialog = useCallback(() => {
//         setDialogState({type: "delete"});
//     }, []);
//
//     const openEditDialog = useCallback((data: RoomData) => {
//         setDialogState({type: "edit", data: data});
//     }, []);
//
//     const closeAddDialog = useCallback(({dst}: OnCloseRoomDialogParams) => {
//         if (dst) {
//             onAddItem?.();
//         }
//         setDialogState(null);
//     }, []);
//
//     const closeDeleteDialog = useCallback((confirmed = false) => {
//         if (confirmed) {
//             onDeleteItems?.();
//         }
//         setDialogState(null);
//     }, [selected]);
//
//     const closeEditDialog = useCallback(({src, dst}: OnCloseRoomDialogParams) => {
//         if (dst) {
//             onEditItem?.();
//         }
//         setDialogState(null);
//     }, []);
//
//     function renderItem(item: string) {
//         return (
//             <NavMenuItem
//                 key={item}
//                 id={item}
//                 onClick={clickItem}
//                 onCheck={selectItem}
//                 onEditAction={openEditDialog}
//             />
//         );
//     }
//
//     return (
//         <List dense>
//             <NavMenuHeader
//                 label={"Rooms"}
//                 variant={"add"}
//                 onCheck={selectItems}
//                 onAddAction={openAddDialog}
//                 onDeleteAction={openDeleteDialog}
//             />
//             <NavMenuDivider/>
//             {Object.values(rooms).map(room => renderItem(room.id))}
//             <RoomDialog
//                 open={dialogState?.type === "add"}
//                 onClose={closeAddDialog}
//                 label={"Add Room"}
//             />
//             <RoomDialog
//                 open={dialogState?.type === "edit"}
//                 onClose={closeEditDialog}
//                 label={"Edit Room"}
//                 data={dialogState?.data}
//             />
//             <DeleteDialog
//                 open={dialogState?.type === "delete"}
//                 onClose={closeDeleteDialog}
//             />
//         </List>
//     )
// }
//
// export default memo(RoomsMenu);

export const asdjas = "asdjals";