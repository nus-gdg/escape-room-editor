import {uniq} from "lodash";
// import React, {ChangeEvent, useCallback, useContext, useMemo, useState} from "react";
// import Root2 from "../../../common/containers/Root2";
// import {addPassage, addRoom, removeRoom, setRoomPassages, setRoomTitle} from "../../../state/data/dataActions";
// import {selectRoom} from "../../../state/editor/editorActions";
// import List from "../../../common/components/List";
// import "./RoomEditor.css";
// import {PassageId} from "../../../state/data/data";
//
// interface RoomEditorState {
//     showPassages: boolean,
// }
//
// interface RoomEditorProps {
//     className?: string,
// }
//
// const RoomEditor = (
//     {
//         className = "",
//     }: RoomEditorProps) => {
//
//     const ctx = useContext(Root2);
//
//     const [state, setState] = useState<RoomEditorState>({
//         showPassages: false,
//     });
//
//     const defaultIds = {
//         passage: "~passage" as PassageId,
//     };
//
//     const handleToggledPassages = useCallback(() => {
//         setState(state => ({
//             ...state,
//             ...{showPassages: !state.showPassages}
//         }));
//     }, []);
//
//     const roomId = ctx.store.editor.id;
//     const room = ctx.store.data.rooms[roomId];
//
//     const handleChangedId = (e: ChangeEvent<HTMLInputElement>) => {
//         const newId = e.currentTarget.value;
//         ctx.dispatch(addRoom(newId, ctx.store.data.rooms[roomId])
//             .then(selectRoom(newId))
//             .then(removeRoom(roomId)));
//     }
//
//     const handleChangedTitle = (e: ChangeEvent<HTMLTextAreaElement>) => {
//         const newTitle = e.currentTarget.value;
//         ctx.dispatch(setRoomTitle(roomId, newTitle));
//     }
//
//     const handleAddedPassage = () => {
//         ctx.dispatch(addPassage(defaultIds.passage)
//             .then(setRoomPassages(roomId, room.passage.concat(defaultIds.passage))));
//     }
//
//     const passages = useMemo(() => {
//         return uniq(Object.keys(room.passage));
//     }, [room.passage]);
//
//     return (
//         <div className={`room-editor ${className}`} >
//             <div className={"room-editor-id form"}>
//                 <div className={"label"}>ROOM ID</div>
//                 <input className={"textbox"} value={roomId} onChange={handleChangedId} placeholder={"ID"}/>
//             </div>
//             <div className={"room-editor-title form"}>
//                 <div className={"label"}>TITLE</div>
//                 <textarea className={"textbox"} value={room.title} onChange={handleChangedTitle} placeholder={"Title"} rows={1}/>
//             </div>
//             <div className={"room-editor-passages"}>
//                 <List
//                     title={"PASSAGES"}
//                     items={passages}
//                     open={state.showPassages}
//                     // isSelected={isSelectedRoom}
//                     onToggle={handleToggledPassages}
//                     onAddListItem={handleAddedPassage}
//                     // onRemoveListItem={handleRemovedRoom}
//                     // onSelectListItem={handleSelectedRoom}
//                 />
//             </div>
//         </div>
//     )
// };
//
// export default React.memo(RoomEditor);
