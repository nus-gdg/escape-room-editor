import { Dispatch } from "react";
import { RootContext } from "../../common/containers/Root";
import { ActionType } from "../../state/actions";
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

//update room name hashmap
function updateHashMap(
    keyID: number,
    newName: string,
    hashmap: { [key: number]: string },
    contentActionType: string,
    stateVarName: string,
    ctx: RootContext
) {
    let updatedHashMap = { ...hashmap };
    updatedHashMap[keyID] = newName;

    ctx.dispatch({
        type: contentActionType,
        payload: { [stateVarName]: updatedHashMap },
    });
}

//delete key value pair in roomNames hashmap
function deleteValueInHashmap(
    keyID: number,
    hashmap: { [key: number]: string },
    contentActionType: string,
    stateVarName: string,
    ctx: RootContext
) {
    let updatedHashMap = { ...hashmap };

    if (updatedHashMap[keyID] !== undefined) {
        delete updatedHashMap[keyID];
    }

    ctx.dispatch({
        type: contentActionType,
        payload: { [stateVarName]: updatedHashMap },
    });
}

export {
    updateRoomList,
    updateCurrRoom,
    updateRoomInList,
    updateHashMap,
    deleteValueInHashmap,
};
