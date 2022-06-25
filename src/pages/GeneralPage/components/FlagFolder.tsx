import React from "react";
import Folder from "../../../common/components/Folder";
import FolderPath from "../../../constants/FolderPath";
import {Flag} from "../../../state/data/data";
import {MenuFolderProps, registerComponent} from "./MenuFolderFactory";

const FlagFolder: React.FC<MenuFolderProps<Flag>> = (
    {
        obj,
        depth = 0,
        path = new FolderPath(),
        selectFolder
    }) => {
    return (
        <Folder
            className={`flag`}
            key={obj.id}
            title={obj.id}
            depth={depth}
            onSelect={() => selectFolder(path, `FLAG`)}/>
    );
};

export default React.memo(FlagFolder);

registerComponent(`FLAG`, FlagFolder);
