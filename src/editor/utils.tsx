import {uuid} from "../constants";
import {Passage, PassageData} from "../passages";
import {Folder} from "../folder";
import {EntityType} from "../entity";
import {setNavigation} from "../navigation/actions";

// function setNavigationWithLogging(folderType: EntityType, id: uuid) {
//     console.log(`Clicked: ${folderType.valueOf()} ${id}`);
//     dispatch(setNavigation(folderType, id));
// }
//
// function createPassageFolder(data: PassageData, index: number) {
//     return (
//         <button
//             key={data.id}
//             renderContents={() => <Passage data={data}/>}
//             onClick={() => setNavigationWithLogging(EntityType.PASSAGE, data.id)}
//         >
//             {index}
//         </button>
//     )
// }

// import React from "react";
// import {setNavigation} from "./actions";
// import {useDispatch, useStore} from "../app";
// import {uuid} from "../constants";
// import {EntityType} from "../entity";
// import {Folder} from "../folder";
// import {Passage, PassageData} from "../passages";
// import {Room, RoomData} from "../rooms";
// import {Item, ItemData} from "../items";
//
// export interface NavigationProps {
//
// }
//
// export const Navigation = () => {
//     const store = useStore();
//     const dispatch = useDispatch();
//
//     // const [expanded, setExpanded] = useState();
//
//     function setNavigationWithLogging(folderType: EntityType, id: uuid) {
//         console.log(`Clicked: ${folderType.valueOf()} ${id}`);
//         dispatch(setNavigation(folderType, id));
//     }
//
//     function createRoomFolder(data: RoomData) {
//         return (
//             <Folder
//                 key={data.id}
//                 renderContents={() => <Room data={data}/>}
//                 renderChildren={() => expandPassages(data.id)}
//                 onClick={() => setNavigationWithLogging(EntityType.ROOM, data.id)}
//                 onExpand={() => console.log(`Expanded: ROOM ${data.id}`)}
//             />
//         )
//     }
//
//     function createItemFolder(data: ItemData) {
//         return (
//             <Folder
//                 key={data.id}
//                 renderContents={() => <Item data={data}/>}
//                 renderChildren={() => expandPassages(data.id)}
//                 onClick={() => setNavigationWithLogging(EntityType.ITEM, data.id)}
//                 onExpand={() => console.log(`Expanded: ITEM ${data.id}`)}
//             />
//         )
//     }
//
//     function createPassageFolder(data: PassageData) {
//         return (
//             <Folder
//                 key={data.id}
//                 renderContents={() => <Passage data={data}/>}
//                 onClick={() => setNavigationWithLogging(EntityType.PASSAGE, data.id)}
//                 onExpand={() => console.log(`Expanded: PASSAGE ${data.id}`)}
//             />
//         )
//     }
//
//     function expandRooms() {
//         return Object.values(store.rooms).map(createRoomFolder);
//     }
//
//     function expandItems() {
//         return Object.values(store.items).map(createItemFolder);
//     }
//
//     function expandPassages(roomId: uuid) {
//         return Object.values(store.passages).filter(passage => passage.parentId === roomId).map(createPassageFolder);
//     }
//
//     return (
//         <div>
//             <Folder
//                 renderContents={() => <div>ROOMS</div>}
//                 renderChildren={() => expandRooms()}
//                 // onClick={() => {}}
//                 onExpand={() => console.log(`Expanded: ROOMS`)}
//             />
//             <Folder
//                 renderContents={() => <div>ITEMS</div>}
//                 renderChildren={() => expandItems()}
//                 // onClick={() => {}}
//                 onExpand={() => console.log(`Expanded: ITEMS`)}
//             />
//         </div>
//     );
// }
