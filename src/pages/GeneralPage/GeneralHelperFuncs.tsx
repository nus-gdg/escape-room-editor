import { RootContext } from "../../common/containers/Root";
import { ContentAction } from "../../state/content/contentActions";
import { RoomData } from "./Data/RoomData";

function updateRoomList(updatedList: RoomData[], ctx: RootContext) {
    ctx.dispatch({
        type: ContentAction.UPDATE_ROOMS_DATA,
        payload: { rooms: updatedList },
    });
}

function updateRoomInList(updatedRoom: RoomData, ctx: RootContext) {
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

function updateCurrRoom(updatedRoom: RoomData, ctx: RootContext) {
    ctx.dispatch({
        type: ContentAction.UPDATE_CURR_ROOM,
        payload: { currRoom: updatedRoom },
    });
}

export { updateRoomList, updateCurrRoom, updateRoomInList };
