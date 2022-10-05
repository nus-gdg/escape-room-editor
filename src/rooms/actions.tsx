import {Action} from "../constants";

export enum RoomsActionId {
    SET = "rooms/SET",
}

export type RoomsAction =
    | SetRoomAction;

export interface SetRoomAction extends Action<RoomsActionId.SET> {
    // type: NavigationActionId.SET;
    // payload: ;
}

export const setRoom = (): SetRoomAction => {
    return {
        // slice: "action",
        type: RoomsActionId.SET,
        // payload: "",
    }
};
