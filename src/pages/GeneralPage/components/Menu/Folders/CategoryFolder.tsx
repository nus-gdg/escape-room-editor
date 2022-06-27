import React from "react";
import {isEqual} from "lodash";
import {getToggleIcon, MenuFolderProps} from "./MenuFolderUtils";
import Folder from "../../../../../common/components/Folder";
import {FolderPath, Symbols} from "../../../../../constants";
import {useToggle} from "../../../../../hooks";
import {Entity} from "../../../../../state/data/data";
import {EditorType} from "../../../../../state/editor/editor";

interface CategoryFolderProps<T extends Entity> {
    type: EditorType,
    title?: string,
    icon?: string,
    objects: T[],
    subfolders: Record<EditorType, React.FC<any> | undefined>,
    path: FolderPath,
    selectFolder: (path: FolderPath, type: EditorType) => void,
}

function CategoryFolder<T extends Entity>(
    {
        type,
        title = "CATEGORY",
        icon = Symbols.circle,
        objects,
        subfolders,
        path,
        selectFolder,
    }: CategoryFolderProps<T>) {
    console.log(`Rendered: CategoryFolder (${type})` );
    const {open, toggle} = useToggle();
    function createSubfolder(obj: T, index: number) {
        const props: MenuFolderProps<T> = {
            obj: obj,
            subfolders: subfolders,
            depth: 1,
            path: path.open(index),
            selectFolder: selectFolder,
        }
        const Subfolder = subfolders[type];
        if (!Subfolder) {
            return;
        }
        return <Subfolder key={obj.id} {...props}/>;
    }
    return (
        <Folder
            className={`category ${type}`}
            key={type}
            title={title}
            depth={0}
            folderIcon={icon}
            toggleIcon={getToggleIcon(open)}
            onToggle={toggle}
            onSelect={() => selectFolder(path, `CATEGORY`)}>
            {open && objects.map(createSubfolder)}
        </Folder>
    );
}

export default React.memo(CategoryFolder, isEqual);
