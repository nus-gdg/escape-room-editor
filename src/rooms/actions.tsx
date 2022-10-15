import {Action} from "../constants";
import {RoomData} from "./index";

export enum RoomsActionId {
    SET = "rooms/SET",
    ADD = "rooms/ADD",
}

export type RoomsAction =
    | AddRoomAction
    | SetRoomAction;

export interface SetRoomAction extends Action<RoomsActionId.SET> {
    // type: NavigationActionId.SET;
    // payload: ;
}

export interface AddRoomAction extends Action<RoomsActionId.ADD> {
    // type: NavigationActionId.SET;
    payload: RoomData;
}

export const addRoom = (room: RoomData): AddRoomAction => {
    return {
        // slice: "action",
        type: RoomsActionId.ADD,
        payload: room,
    }
};

export const setRoom = (): SetRoomAction => {
    return {
        // slice: "action",
        type: RoomsActionId.SET,
        // payload: "",
    }
};
