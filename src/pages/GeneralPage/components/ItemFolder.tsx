import React from "react";
import Folder from "../../../common/components/Folder";
import FolderPath from "../../../constants/FolderPath";
import {Item, Passage} from "../../../state/data/data";
import MenuFolderFactory, {MenuFolderProps, registerComponent} from "./MenuFolderFactory";

const ItemFolder: React.FC<MenuFolderProps<Item>> = (
    {
        obj,
        depth = 0,
        path = new FolderPath(),
        selectFolder
    }) => {
    const props: MenuFolderProps<Passage> = {
        obj: obj.passage,
        depth: depth + 1,
        path: path?.open(`passage`),
        selectFolder: selectFolder,
    }
    return (
        <Folder
            className={`item`}
            key={obj.id}
            title={obj.id}
            depth={depth}
            onSelect={() => selectFolder(path, `ITEM`)}>
            {/*<MenuFolderFactory type={`PASSAGE`} {...props}/>*/}
        </Folder>
    );
};

registerComponent(`ITEM`, ItemFolder);

export default React.memo(ItemFolder);
