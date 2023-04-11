import {ChangeEvent, memo, useRef} from "react";
import UploadIcon from "@mui/icons-material/Upload";
import {IconButton} from "../../components/forms";

const openIcon = <UploadIcon/>;

const OpenButton = () => {
    const fileInput = useRef<HTMLInputElement | null>(null);

    const handleFileRead = (event: ProgressEvent<FileReader>) => {
        if (!event.target) {
            return;
        }
        const content = event.target.result as string;
        const state = JSON.parse(content);
        console.log(state);
    }

    const handleFileChosen = (event: ChangeEvent<HTMLInputElement>) => {
        if (!event.target.files) {
            return;
        }
        const fileReader = new FileReader();
        fileReader.onloadend = handleFileRead;
        fileReader.readAsText(event.target.files[0]);
    }

    const handleClick = () => {
        fileInput.current?.click();
    }

    return (
        <>
            <input ref={fileInput}
                   type={"file"}
                   accept={".json"}
                   onChange={handleFileChosen}
                   hidden />
            <IconButton icon={openIcon} title={"Open"} onClick={handleClick}/>
        </>
    )
}

export default memo(OpenButton);
