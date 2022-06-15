import React from "react";
import {Room} from "../../../state/data/data";


interface RoomFolderState {
    showRooms: boolean,
    showItems: boolean,
}

interface RoomFolderProps {
    className?: string,
    room?: Room;
}

const RoomFolder = (
    {
        className = "",
        room,
    }: RoomFolderProps) => {
    console.log("RoomsFolder: Rendered");

    const hasRoom = !!room;
    return (
        <div style={{display: "flex", flexDirection: "column"}}>
            {room?.id}
            {hasRoom && room?.passages.map(passage => {
                return <div key={passage.id}>{">  "}{passage.id}</div>;
            })}
        </div>
    );
};

export default React.memo(RoomFolder);
