import React from 'react';
import {SaveFileButton} from "../../../common/components/SaveFileButton";
import {LoadFileButton} from "../../../common/components/LoadFileButton";
import {useRoot} from "../../../hooks/useRoot";
import {FileAction} from "../../../state/file/fileActions";

export const GeneralPageFileDialog = () => {
    const ctx = useRoot();

    const handleFileLoaded = (content: string) => {
        ctx.dispatch({type: FileAction.LOAD, payload: { username: "mango" }})
    };

    return (
        <>
            <LoadFileButton accept={".json"} onFileRead={handleFileLoaded}>
                Load
            </LoadFileButton>
            <SaveFileButton type={"application/json"}>
                Save
            </SaveFileButton>
        </>
    );
}
