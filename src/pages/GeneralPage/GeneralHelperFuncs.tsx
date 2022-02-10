import { RootContext } from "../../common/containers/Root";
import { useRoot } from "../../hooks/useRoot";
import { ContentAction } from "../../state/content/contentActions";
import { RoomData } from "./Data/RoomData";

export function updateRoomInList(updatedRoom: RoomData, ctx: RootContext) {
    const index = ctx.state.rooms.findIndex(
        (room) => room.id === updatedRoom.id
    );

    //update the correct room in the list
    let tempRoomList = ctx.state.rooms;
    tempRoomList[index] = updatedRoom;

    //update roomList
    ctx.dispatch({
        type: ContentAction.UPDATE_ROOMS_DATA,
        payload: { rooms: tempRoomList },
    });
}
