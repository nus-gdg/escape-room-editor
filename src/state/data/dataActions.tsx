import {
    Entity,
    Passage,
    Room,
} from "./data";
import Action from "../~actions";
import FolderPath from "../../constants/FolderPath";
import Store from "../store";
import {EditorType} from "../editor/editor";
import {openEditor, openFolder} from "../editor/editorActions";

export function addEntity<T extends Entity>(path: FolderPath, objects: T[], createEntity: () => T) {
    const newObjects = objects.concat(createEntity());
    return new Action<Store>().setEntry(path.folders, newObjects);
}

export function addRoom(path: FolderPath, room: Room): Action<Store> {
    return new Action<Store>().setEntry(path.folders, room);
}

export function removeRoom(path: FolderPath): Action<Store> {
    return new Action<Store>().unsetEntry(path.folders);
}

export function addPassage(path: FolderPath, passage: Passage): Action<Store> {
    return new Action<Store>().setEntry(path.folders, passage);
}

export function setId(path: FolderPath, id: string): Action<Store> {
    return new Action<Store>().setEntry(path.folders.concat(`id`), id);
}

export function setRoomTitle(path: FolderPath, title: string): Action<Store> {
    return new Action<Store>().setEntry(path.folders.concat(`title`), title);
}

export function setPassageText(path: FolderPath, text: string): Action<Store> {
    return new Action<Store>().setEntry(path.folders.concat(`text`, `0`), text);
}

export function setPassageImage(path: FolderPath, image: string): Action<Store> {
    return new Action<Store>().setEntry(path.folders.concat(`image`, `0`), image);
}

// export function addRoomPassage(id: RoomId, passageId: PassageId, passage = new Passage()): Action<Data> {
//     return new Action()
//         .set({data: {rooms: {[id]: {passage: [passageId]}}}})
//         .set({data: {passages: {[passageId]: passage}}});
// }
//
// export function addItem(id: ItemId, item: Item = new Item()): Action<Data> {
//     return new Action().set({data: {inventory: {[id]: item}}});
// }
//
// export function removeItem(id: ItemId): Action<Data> {
//     return new Action().unset({data: {inventory: {[id]: undefined}}});
// }
