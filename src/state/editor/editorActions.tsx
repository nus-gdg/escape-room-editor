import Action from "../~actions";
import {EditorType} from "./editor";
import FolderPath from "../../constants/FolderPath";
import Store from "../store";

export function openFolder(path: FolderPath): Action<Store> {
    return new Action<Store>()
        .unset({editor: {path: undefined}})
        .set({editor: {path: path}});
}

export function openEditor(editorType: EditorType): Action<Store> {
    return new Action<Store>()
        .set({editor: {type: editorType}});
}
