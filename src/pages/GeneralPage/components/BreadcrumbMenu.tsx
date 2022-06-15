import {uniq} from "lodash";
// import React, {useCallback, useContext, useMemo, useState} from "react";
// import Root2 from "../../../common/containers/Root2";
// import {addItem, addRoom, removeItem, removeRoom} from "../../../state/data/dataActions";
// import List from "../../../common/components/List";
// import "./NavigationMenu.css";
//
// interface BreadcrumbState {
//     showRooms: boolean,
//     showItems: boolean,
// }
//
// interface BreadcrumbMenuProps {
//     className?: string,
// }
//
// const BreadcrumbMenu = (
//     {
//         className = "",
//     }: BreadcrumbMenuProps) => {
//     console.log("BreadcrumbMenu: Rendered");
//
//     const ctx = useContext(Root2);
//
//     const [state, setState] = useState<BreadcrumbState>({
//         showRooms: false,
//         showItems: false,
//     });
//
//     const defaultIds = {
//         room: "room",
//         item: "item",
//     };
//
//     const handleToggledRooms = useCallback(() => {
//         setState(state => ({
//             ...state,
//             ...{showRooms: !state.showRooms}
//         }));
//     }, []);
//
//     const handleToggledItems = useCallback(() => {
//         setState(state => ({
//             ...state,
//             ...{showItems: !state.showItems}
//         }));
//     }, []);
//
//     const handleAddedRoom = () => {
//         ctx.dispatch(addRoom(defaultIds.room).then(selectRoom(defaultIds.room)));
//     }
//
//     const handleAddedItem = () => {
//         ctx.dispatch(addItem(defaultIds.item).then(selectItem(defaultIds.item)));
//     }
//
//     const handleRemovedRoom = (e: string) => {
//         ctx.dispatch(removeRoom(e));
//     }
//
//     const handleRemovedItem = (e: string) => {
//         ctx.dispatch(removeItem(e));
//     }
//
//     const handleSelectedRoom = (e: string) => {
//         ctx.dispatch(selectRoom(e));
//     }
//
//     const handleSelectedItem = (e: string) => {
//         ctx.dispatch(selectItem(e));
//     }
//
//     const isSelectedRoom = (item: string) => {
//         return ctx.store.editor.id === item
//             && ctx.store.editor.type === "ROOM";
//     }
//
//     const isSelectedItem = (item: string) => {
//         return ctx.store.editor.id === item
//             && ctx.store.editor.type === "ITEM";
//     }
//
//     const rooms = useMemo(() => {
//         return uniq(Object.keys(ctx.store.data.rooms));
//     }, [ctx.store.data.rooms]);
//
//     const items = useMemo(() => {
//         return uniq(Object.keys(ctx.store.data.inventory));
//     }, [ctx.store.data.inventory]);
//
//     return (
//         <div className={`breadcrumb-menu ${className}`}>
//             <List
//                 title={"BREADCRUMBS"}
//                 items={rooms}
//                 open={state.showRooms}
//                 isSelected={isSelectedRoom}
//                 onToggle={handleToggledRooms}
//                 onAddListItem={handleAddedRoom}
//                 onRemoveListItem={handleRemovedRoom}
//                 onSelectListItem={handleSelectedRoom}/>
//         </div>
//     );
// };
//
// export default React.memo(BreadcrumbMenu);
