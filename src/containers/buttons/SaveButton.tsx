import {memo} from "react";
import SaveIcon from "@mui/icons-material/Save";
import DownloadButton from "../../components/forms/DownloadButton";
import {createSaveFile, defaultSaveFileName} from "./utils";

const saveIcon = <SaveIcon/>;

const SaveButton = () => {
    return (
        <DownloadButton
            title={"Save"}
            icon={saveIcon}
            fileName={defaultSaveFileName}
            createBlob={createSaveFile}
        />
    )
}

export default memo(SaveButton);
