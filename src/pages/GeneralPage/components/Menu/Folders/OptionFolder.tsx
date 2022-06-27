import React from "react";
import {isEqual} from "lodash";
import {getToggleIcon, MenuFolderProps} from "./MenuFolderUtils";
import Folder from "../../../../../common/components/Folder";
import FolderPath from "../../../../../constants/FolderPath";
import {useToggle} from "../../../../../hooks";
import {Option, Passage} from "../../../../../state/data/data";

const OptionFolder = (
    {
        obj,
        subfolders,
        depth = 0,
        path = new FolderPath(),
        selectFolder,
    }: MenuFolderProps<Option>) => {
    console.log(`Rendered: OptionFolder (${obj.id})` );
    const {open, toggle} = useToggle();
    function createPassageFolder(obj: Passage, index: number) {
        const props: MenuFolderProps<Passage> = {
            obj: obj,
            subfolders: subfolders,
            depth: depth + 1,
            path: path.open(`prepend`, index),
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
            className={`option`}
            key={obj.id}
            title={obj.id}
            depth={depth}
            toggleIcon={getToggleIcon(open)}
            onToggle={toggle}
            onSelect={() => selectFolder(path, `OPTION`)}>
            {open && obj.prepend.map(createPassageFolder)}
        </Folder>
    );
}

export default React.memo(OptionFolder, isEqual);
