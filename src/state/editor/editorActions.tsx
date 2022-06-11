import {
    ItemId,
    RoomId
} from "../data/data";
import Action from "../~actions";

export function selectRoom(id: RoomId): Action {
    return new Action().set({editor: {id: id, type: "ROOM"}});
}

export function selectItem(id: ItemId): Action {
    return new Action().set({editor: {id: id, type: "ITEM"}});
}
