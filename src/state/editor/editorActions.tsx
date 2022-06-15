import Action from "../~actions";
import Editor, {EditorPath, EditorFolder, EditorType} from "./editor";

export function closeFolder(path: EditorPath): Action<Editor> {
    return new Action<Editor>()
        .unset({ path: undefined })
        .set({path: path.close()});
}

export function closeFolders(): Action<Editor> {
    return new Action<Editor>()
        .unset({ path: undefined })
        .set({path: new EditorPath()});
}

function openFolder(path: EditorPath, propertyName: string, index: number, type: EditorType): Action<Editor> {
    return new Action<Editor>()
        .unset({ path: undefined })
        .set({path: path.open(new EditorFolder(propertyName, index, type))});
}

export function selectPath(path: EditorPath): Action<Editor> {
    return new Action<Editor>()
        .unset({path: undefined})
        .set({path: path});
}

export function openRoom(path: EditorPath, index: number): Action<Editor> {
    return openFolder(path, "rooms", index, "ROOM");
}

export function openItem(path: EditorPath, index: number): Action<Editor> {
    return openFolder(path, "inventory", index, "ITEM");
}

export function openReactionOption(path: EditorPath, index: number): Action<Editor> {
    return openFolder(path, "reactionOptions", index, "REACTION_OPTION");
}

export function openTextOption(path: EditorPath, index: number): Action<Editor> {
    return openFolder(path, "textOptions", index, "TEXT_OPTION");
}

export function openRoomPassage(path: EditorPath, index: number): Action<Editor> {
    return openFolder(path, "passages", index, "PASSAGE");
}

export function openItemPassage(path: EditorPath, index: number): Action<Editor> {
    return openFolder(path, "passage", index, "PASSAGE");
}

export function openOptionPassage(path: EditorPath, index: number): Action<Editor> {
    return openFolder(path, "prepend", index, "PASSAGE");
}
