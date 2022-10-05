import {Room, RoomData} from "../rooms";
import {Folder} from "../folder";
import React from "react";
import {useDispatch, useStore} from "../app";
import {setNavigation} from "./actions";
import {NavigationFolderType} from "./NavigationData";

export interface NavigationProps {

}

export const Navigation = () => {
    const store = useStore();
    const dispatch = useDispatch();

    // const [expanded, setExpanded] = useState();

    function createRoomFolder(data: RoomData, index: number) {
        return (
            <Folder
                key={index}
                renderContents={() => <Room data={data}/>}
                // expand={expanded}
                onClick={() => {
                    console.log(`Clicked: ROOM ${index}`);
                    dispatch(setNavigation(NavigationFolderType.ROOM, index));
                }}
                onExpand={() => console.log(`Expanded: ROOM ${index}`)}
            />
        );
    }

    return (
        <div>
            {store.rooms.map(createRoomFolder)}
        </div>
    );
}
