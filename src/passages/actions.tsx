import {Action} from "../constants";

export enum PassagesActionId {
    SET = "rooms/SET",
}

export type PassagesAction =
    | SetPassageAction;

export interface SetPassageAction extends Action<PassagesActionId.SET> {
    // type: NavigationActionId.SET;
    // payload: ;
}

export const setPassage = (): SetPassageAction => {
    return {
        // slice: "action",
        type: PassagesActionId.SET,
        // payload: "",
    }
};
