import {LoadFileButton} from "../../common/components/LoadFileButton";
import {SaveFileButton} from "../../common/components/SaveFileButton";

export const GeneralPage = () => (
    <>
        <LoadFileButton accept={".json"}>
            Load
        </LoadFileButton>
        <SaveFileButton type={"application/json"}>
            Save
        </SaveFileButton>
    </>
)
