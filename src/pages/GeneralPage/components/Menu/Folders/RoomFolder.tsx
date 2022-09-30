import React from "react";
import {isEqual} from "lodash";
import {getToggleIcon, MenuFolderProps} from "./MenuFolderUtils";
import Folder from "../../../../../common/components/Folder";
import FolderPath from "../../../../../constants/FolderPath";
import {useToggle} from "../../../../../hooks";
import {Passage, Room} from "../../../../../state/data/data";

const RoomFolder = (
    {
        obj,
        subfolders,
        depth = 0,
        path = new FolderPath(),
        selectFolder,
    }: MenuFolderProps<Room>) => {
    console.log(`Rendered: RoomFolder (${obj.id})` );
    const {open, toggle} = useToggle();
    function createPassageFolder(obj: Passage, index: number) {
        const props: MenuFolderProps<Passage> = {
            obj: obj,
            subfolders: subfolders,
            depth: depth + 1,
            path: path.open(`passages`, index),
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
            className={`room`}
            key={obj.id}
            title={obj.id}
            depth={depth}
            toggleIcon={getToggleIcon(open)}
            onToggle={toggle}
            onSelect={() => selectFolder(path, `ROOM`)}>
            {open && obj.passages.map(createPassageFolder)}
            {/*<button onClick={clicky}/>*/}
        </Folder>
    );
}
function clicky() {
    console.log("CLICKY!");
}
export default React.memo(RoomFolder, isEqual);
