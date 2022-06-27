import React from "react";
import {FolderPath, Symbols} from "../../../../../constants";
import {EditorType} from "../../../../../state/editor/editor";

export interface MenuFolderProps<T> {
    obj: T,
    subfolders: Record<EditorType, React.FC<any> | undefined>,
    depth: number,
    path: FolderPath,
    selectFolder: (path: FolderPath, type: EditorType) => void,
}

export function getToggleIcon(open: boolean) {
    return open ? Symbols.downArrow : Symbols.rightArrow;
}
