import React from "react";
import {isEqual} from "lodash";
import {getToggleIcon, MenuFolderProps} from "./MenuFolderUtils";
import Folder from "../../../../../common/components/Folder";
import FolderPath from "../../../../../constants/FolderPath";
import {useToggle} from "../../../../../hooks";
import {Item, Passage} from "../../../../../state/data/data";

const ItemFolder = (
    {
        obj,
        subfolders,
        depth = 0,
        path = new FolderPath(),
        selectFolder,
    }: MenuFolderProps<Item>) => {
    console.log(`Rendered: ItemFolder (${obj.id})` );
    const {open, toggle} = useToggle();
    function createPassageFolder() {
        const props: MenuFolderProps<Passage> = {
            obj: obj.passage,
            subfolders: subfolders,
            depth: depth + 1,
            path: path.open(`passage`),
            selectFolder: selectFolder,
        }
        const Subfolder = subfolders[`PASSAGE`];
        if (!Subfolder) {
            return;
        }
        return <Subfolder key={obj.id} {...props}/>;
    }
    return (
        <Folder
            className={`item`}
            key={obj.id}
            title={obj.id}
            depth={depth}
            toggleIcon={getToggleIcon(open)}
            onToggle={toggle}
            onSelect={() => selectFolder(path, `ITEM`)}>
            {open && createPassageFolder()}
        </Folder>
    );
}

export default React.memo(ItemFolder, isEqual);
