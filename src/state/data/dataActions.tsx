import {
    Item,
    ItemId,
    Passage,
    PassageId,
    Room,
    RoomId
} from "./data";
import Action from "../~actions";

export function addRoom(id: RoomId, room: Room = new Room()): Action {
    return new Action().set({data: {rooms: {[id]: room}}});
}

export function removeRoom(id: RoomId): Action {
    return new Action().unset({data: {rooms: {[id]: undefined}}});
}

export function setRoomTitle(id: RoomId, title: string): Action {
    return new Action().set({data: {rooms: {[id]: {title: title}}}});
}

export function setRoomPassages(id: RoomId, passages: PassageId[]): Action {
    return new Action().set({data: {rooms: {[id]: {passage: passages}}}});
}

export function addPassage(id: PassageId, passage: Passage): Action {
    return new Action().set({data: {passages: {[id]: passage}}});
}

export function addItem(id: ItemId, item: Item = new Item()): Action {
    return new Action().set({data: {inventory: {[id]: item}}});
}

export function removeItem(id: ItemId): Action {
    return new Action().unset({data: {inventory: {[id]: undefined}}});
}
