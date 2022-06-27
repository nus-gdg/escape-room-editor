import FolderPath from "../../constants/FolderPath";

export type EditorType = "NONE"
    | "SETTINGS"
    | "CATEGORY"
    | "ITEM"
    | "FLAG"
    | "OPTION"
    | "PASSAGE"
    | "ROOM";

export default class Editor {
    path: FolderPath = new FolderPath();
    type: EditorType = "NONE";
}
