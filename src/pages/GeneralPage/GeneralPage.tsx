import {LoadFileButton} from "../../common/components/LoadFileButton";
import {SaveFileButton} from "../../common/components/SaveFileButton";

export const GeneralPage = () => (
    <>
        <LoadFileButton label={"Done"} accept={".json"}/>
        <SaveFileButton label={"Save"} />
    </>
)
