import {memo, useRef} from "react";
import SaveIcon from "@mui/icons-material/Save";
import {store} from "../../app";
import {IconButton} from "../../components/forms";

const saveIcon = <SaveIcon/>;

const fileName = "game.json";
const fileOptions: BlobPropertyBag = {
    type: "application/json",
};

const jsonReplacer = undefined;
const jsonSpacer = "  "; // 2 spaces

const inlineStyle = {display: "none"};

const SaveButton = () => {
    const fileOutput = useRef<HTMLAnchorElement | null>(null);

    const handleClick = () => {
        if (!fileOutput.current) {
            return;
        }
        const contents = JSON.stringify(store.getState(), jsonReplacer, jsonSpacer);
        const file = new Blob([contents], fileOptions);
        fileOutput.current.href = URL.createObjectURL(file);
        fileOutput.current.download = fileName;
        fileOutput.current?.click();
    }

    return (
        <>
            <a ref={fileOutput} href={"#/"} style={inlineStyle}>
                Anchor for downloading json file
            </a>
            <IconButton icon={saveIcon} title={"Save"} onClick={handleClick}/>
        </>
    )
}

export default memo(SaveButton);
