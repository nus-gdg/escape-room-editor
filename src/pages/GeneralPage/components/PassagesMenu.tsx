import {uniq} from "lodash";
// import React, {useCallback, useContext, useMemo, useState} from "react";
// import Root2 from "../../../common/containers/Root2";
// import {
//     addItem,
//     addPassage,
//     addRoom,
//     addRoomPassage,
//     removeItem,
//     removeRoom,
//     setRoomPassages
// } from "../../../state/data/dataActions";
// import {selectItem, selectPassage, selectRoom} from "../../../state/editor/editorActions";
// import List from "../../../common/components/List";
// import "./NavigationMenu.css";
// import {PassageId} from "../../../state/data/data";
// import {createUuid} from "../../../constants/uuids";
// import {EditorPath, EditorFolder} from "../../../state/editor/editor";
//
// interface PassagesMenuState {
//     showPassages: boolean,
// }
//
// interface PassagesMenuProps {
//     className?: string,
//     passages?: string[],
//     selected?: string,
//     previousHistory?: EditorPath,
// }
//
// const PassagesMenu = (
//     {
//         className = "",
//         passages = [],
//         selected = undefined,
//         previousHistory = new EditorPath(),
//     }: PassagesMenuProps) => {
//     console.log("PassagesMenu: Rendered");
//
//     const ctx = useContext(Root2);
//
//     const [toggles, setToggles] = useState<PassagesMenuState>({
//         showPassages: false,
//     });
//
//     const handleToggledPassages = useCallback(() => {
//         setToggles(toggles => ({
//             ...toggles,
//             ...{showPassages: !toggles.showPassages}
//         }));
//     }, []);
//
//     const handleAddedPassage = () => {
//         const newId = createUuid();
//         ctx.dispatch(addPassage(newId, previousHistory)
//             .then(selectPassage(newId, previousHistory)));
//     }
//
//     const handleRemovedPassage = (e: PassageId) => {
//         ctx.dispatch(removePassage(e));
//     }
//
//     const handleSelectedPassage = (e: PassageId) => {
//         ctx.dispatch(selectPassage(e, previousHistory));
//     }
//
//     const isSelectedPassage = (e: string) => {
//         return !!selected && selected === e;
//     }
//
//     const passages = useMemo(() => {
//         return uniq(Object.keys(ctx.store.data.rooms));
//     }, [ctx.store.data.rooms]);
//
//     return (
//         <div className={`navigation-menu ${className}`}>
//             <List
//                 title={"PASSAGES"}
//                 items={passages}
//                 open={toggles.showPassages}
//                 isSelected={isSelectedPassage}
//                 onToggle={handleToggledPassages}
//                 onAddListItem={handleAddedPassage}
//                 onRemoveListItem={handleRemovedPassage}
//                 onSelectListItem={handleSelectedPassage}/>
//         </div>
//     );
// };
//
// export default React.memo(PassagesMenu);
