export type EditorType = "SETTINGS"
    | "CATEGORY_ROOMS"
    | "CATEGORY_ITEMS"
    | "CATEGORY_FLAGS"
    | "CATEGORY_GLOBALS"
    | "ROOM"
    | "ITEM"
    | "FLAG"
    | "GLOBAL_TEXT_OPTION"
    | "PASSAGE"
    | "REACTION_OPTION"
    | "TEXT_OPTION";

export class EditorFolder {
    propertyName: string;
    index: number;
    type: EditorType;

    constructor(propertyName: string, index: number, type: EditorType) {
        this.propertyName = propertyName;
        this.index = index;
        this.type = type;
    }
}

export class EditorPath {
    folders: EditorFolder[];

    constructor(folders: EditorFolder[] = []) {
        this.folders = folders;
    }

    open(folder: EditorFolder): EditorPath {
        return new EditorPath(this.folders.concat(folder));
    }

    close(): EditorPath {
        return new EditorPath(this.folders.slice(0, -1));
    }

    current(): EditorFolder | undefined {
        return this.folders[this.folders.length - 1];
    }

    resolve(): string[] {
        const resolvedPath = [];
        for (const folder of this.folders) {
            resolvedPath.push(folder.propertyName);
            resolvedPath.push(folder.index.toString());
        }
        return resolvedPath;
    }
}

export default class Editor {
    path: EditorPath = new EditorPath();
}
