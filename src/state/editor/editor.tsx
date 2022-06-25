import FolderPath from "../../constants/FolderPath";

export type EditorType = "NONE"
    | "SETTINGS"
    | "CATEGORY"
    | "ITEM"
    | "FLAG"
    | "TEXT_OPTION"
    | "REACTION_OPTION"
    | "PASSAGE"
    | "ROOM";

export default class Editor {
    path: FolderPath = new FolderPath();
    type: EditorType = "NONE";
}
