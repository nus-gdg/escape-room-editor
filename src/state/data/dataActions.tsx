import Data, {
    Item,
    ItemId,
    Passage,
    PassageId,
    Room,
    RoomId
} from "./data";
import Action from "../~actions";

export function addRoom(id: RoomId, room: Room = new Room()): Action<Data> {
    return new Action().set({data: {rooms: {[id]: room}}});
}

export function removeRoom(id: RoomId): Action<Data> {
    return new Action().unset({data: {rooms: {[id]: undefined}}});
}

export function setRoomTitle(id: RoomId, title: string): Action<Data> {
    return new Action().set({data: {rooms: {[id]: {title: title}}}});
}

export function addRoomPassage(id: RoomId, passageId: PassageId, passage = new Passage()): Action<Data> {
    return new Action()
        .set({data: {rooms: {[id]: {passage: [passageId]}}}})
        .set({data: {passages: {[passageId]: passage}}});
}

export function addItem(id: ItemId, item: Item = new Item()): Action<Data> {
    return new Action().set({data: {inventory: {[id]: item}}});
}

export function removeItem(id: ItemId): Action<Data> {
    return new Action().unset({data: {inventory: {[id]: undefined}}});
}
