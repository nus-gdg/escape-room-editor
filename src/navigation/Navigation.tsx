import {Room, RoomData} from "../rooms";
import {Folder} from "../folder";
import React from "react";
import {useDispatch, useStore} from "../app";
import {setNavigation} from "./actions";
import {Passage, PassageData} from "../passages";
import {uuid} from "../constants";
import {EntityType} from "../entity";

export interface NavigationProps {

}

export const Navigation = () => {
    const store = useStore();
    const dispatch = useDispatch();

    // const [expanded, setExpanded] = useState();

    function setNavigationWithLogging(folderType: EntityType, index: number) {
        console.log(`Clicked: ${folderType.valueOf()} ${index}`);
        dispatch(setNavigation(folderType, index));
    }

    function createRoomFolder(data: RoomData, index: number) {
        return (
            <Folder
                key={index}
                renderContents={() => <Room data={data}/>}
                renderChildren={() => expandPassages(data.id)}
                onClick={() => setNavigationWithLogging(EntityType.ROOM, index)}
                onExpand={() => console.log(`Expanded: ROOM ${data.id}`)}
            />
        );
    }

    function createPassageFolder(data: PassageData, index: number) {
        return (
            <Folder
                key={index}
                renderContents={() => <Passage data={data}/>}
                onClick={() => setNavigationWithLogging(EntityType.PASSAGE, index)}
                onExpand={() => console.log(`Expanded: PASSAGE ${index}`)}
            />
        );
    }

    function expandRooms() {
        return Object.values(store.rooms).map(createRoomFolder);
    }

    function expandPassages(roomId: uuid) {
        return Object.values(store.passages).filter(passage => passage.parentId === roomId).map(createPassageFolder);
    }

    return (
        <div>
            <Folder
                renderContents={() => <div>ROOMS</div>}
                renderChildren={() => expandRooms()}
                // onClick={() => {}}
                onExpand={() => console.log(`Expanded: ROOMS`)}
            />
        </div>
    );
}
