import {ItemData} from "./ItemData";
import {ItemsAction} from "./actions";
import {uuid} from "../constants";

export type ItemsState = Record<uuid, ItemData>;

export const initialItems: ItemsState = {
    "fe65f435-8061-485d-93e0-ef55ac51947b": {
        id: "fe65f435-8061-485d-93e0-ef55ac51947b",
        name: "POTATO",
    },
    "049e4c2e-811f-414e-9f86-d90659ff178a": {
        id: "049e4c2e-811f-414e-9f86-d90659ff178a",
        name: "MILO",
    },
    "aa56c0ee-61e7-4c8b-a594-020a15ae1840": {
        id: "aa56c0ee-61e7-4c8b-a594-020a15ae1840",
        name: "TOMATO",
    },
};

export const itemsReducer = (state = initialItems, action: ItemsAction) : ItemsState => {
    // return state.concat({
    //     name: `${5}`,
    // })
    // return state.map(room => ({...room, name: room.name + '!'}));
    switch (action.type) {
    //     case RoomsActionId.SET:
    //         return { ...state, action };
    //     case RoomsActionId.CLEAR:
    //         return { ...state, action };
        default:
            return state;
    }
}
