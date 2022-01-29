import React from 'react';
import {SaveFileButton} from "../../../common/components/SaveFileButton";
import {LoadFileButton} from "../../../common/components/LoadFileButton";
import {useRoot} from "../../../hooks/useRoot";
import {FileAction} from "../../../state/file/fileActions";

export const GeneralPageFileDialog = () => {
    const ctx = useRoot();

    const handleFileLoaded = (content: string) => {
        const obj = JSON.parse(content);
        // TODO: validate obj is typeof Partial<State>
        ctx.dispatch({type: FileAction.LOAD, payload: obj})
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
