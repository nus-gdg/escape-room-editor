import {Action} from "../constants";

export enum ItemsActionId {
    SET = "rooms/SET",
}

export type ItemsAction =
    | SetItemAction;

export interface SetItemAction extends Action<ItemsActionId.SET> {
    // type: NavigationActionId.SET;
    // payload: ;
}

export const setRoom = (): SetItemAction => {
    return {
        // slice: "action",
        type: ItemsActionId.SET,
        // payload: "",
    }
};
