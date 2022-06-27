import React from "react";
import {isEqual} from "lodash";
import {MenuFolderProps} from "./MenuFolderUtils";
import Folder from "../../../../../common/components/Folder";
import FolderPath from "../../../../../constants/FolderPath";
import {Flag} from "../../../../../state/data/data";

const FlagFolder = (
    {
        obj,
        subfolders,
        depth = 0,
        path = new FolderPath(),
        selectFolder,
    }: MenuFolderProps<Flag>) => {
    console.log(`Rendered: FlagFolder (${obj.id})` );
    // const [selected, setSelected] = useState(false);
    // const memoSetSelected = useCallback(() => setSelected(true), []);
    return (
        <Folder
            className={`flag`}
            key={obj.id}
            title={obj.id}
            depth={depth}
            onSelect={() => selectFolder(path, `FLAG`)}/>
    );
}

export default React.memo(FlagFolder, isEqual);
