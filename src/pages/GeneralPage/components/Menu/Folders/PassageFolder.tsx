import React from "react";
import {isEqual} from "lodash";
import {getToggleIcon, MenuFolderProps} from "./MenuFolderUtils";
import Folder from "../../../../../common/components/Folder";
import FolderPath from "../../../../../constants/FolderPath";
import {useToggle} from "../../../../../hooks";
import {Option, Passage} from "../../../../../state/data/data";

const PassageFolder = (
    {
        obj,
        subfolders,
        depth = 0,
        path = new FolderPath(),
        selectFolder,
    }: MenuFolderProps<Passage>) => {
    console.log(`Rendered: PassageFolder (${obj.id})` );
    const {open, toggle} = useToggle();
    function createOptionFolder(subfolderPath: string) {
        return (obj: Option, index: number) => {
            const props: MenuFolderProps<Option> = {
                obj: obj,
                subfolders: subfolders,
                depth: depth + 1,
                path: path.open(subfolderPath, index),
                selectFolder: selectFolder,
            }
            const Subfolder = subfolders[`OPTION`];
            if (!Subfolder) {
                return;
            }
            return <Subfolder key={obj.id} {...props}/>;
        }
    }

    const createTextOptionFolder = createOptionFolder(`textOptions`);
    const createReactionOptionFolder = createOptionFolder(`reactionOptions`);

    return (
        <Folder
            className={`passage`}
            key={obj.id}
            title={obj.id}
            depth={depth}
            toggleIcon={getToggleIcon(open)}
            onToggle={toggle}
            onSelect={() => selectFolder(path, `PASSAGE`)}>
            {open && obj.reactionOptions.map(createReactionOptionFolder)}
            {open && obj.textOptions.map(createTextOptionFolder)}
        </Folder>
    );
}

export default React.memo(PassageFolder, isEqual);
