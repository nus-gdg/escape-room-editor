import React, {useCallback} from "react";
import Folder from "../../../common/components/Folder";
import FolderPath from "../../../constants/FolderPath";
import {Item, Passage} from "../../../state/data/data";
import MenuFolderFactory, {MenuFolderProps, registerComponent} from "./MenuFolderFactory";
import Symbols from "../../../constants/Symbols";
import {EditorType} from "../../../state/editor/editor";

interface CategoryFolderProps<T extends {id: string}> {
    type: EditorType,
    title?: string,
    icon?: string,
    objects: T[],
    path: FolderPath,
    selectFolder: (path: FolderPath, type: EditorType) => void,
}

function CategoryFolder<T extends {id: string}>(
    {
        type,
        title = "CATEGORY",
        icon = Symbols.circle,
        objects,
        path,
        selectFolder,
    }: CategoryFolderProps<T>) {
    function createSubfolderProps(obj: T, index: number) {
        const props: MenuFolderProps<T> = {
            obj: obj,
            depth: 1,
            path: path.open(index),
            selectFolder: selectFolder,
        }
        return <MenuFolderFactory key={obj.id} type={type} {...props}/>;
    }
    return (
        <Folder
            className={`category ${type}`}
            key={type}
            title={title}
            icon={icon}
            depth={0}
            onSelect={() => selectFolder(path, `CATEGORY`)}>
            {objects.map(createSubfolderProps)}
        </Folder>
    );
}

export default React.memo(CategoryFolder);

registerComponent(`CATEGORY`, CategoryFolder);
