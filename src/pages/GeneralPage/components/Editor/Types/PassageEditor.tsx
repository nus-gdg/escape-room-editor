import {get} from "lodash";
import React, {ChangeEvent} from "react";
import "./RoomEditor.css";
import {Passage} from "../../../../../state/data/data";
import {useRootDispatch, useRootStore} from "../../../../../hooks"
import {setId, setPassageImage, setPassageText} from "../../../../../state/data/dataActions";

// interface PassageEditorState {
//     showPassages: boolean,
// }

interface PassageEditorProps {
    className?: string,
}

const PassageEditor = (
    {
        className = "",
    }: PassageEditorProps) => {

    const store = useRootStore();
    const dispatch = useRootDispatch();

    const path = store.editor.path;
    const passage: Passage = get(store, path.folders);

    // export class Passage {
    //     id: PassageId = "";
    //     conditions: Condition[] = [];
    //     text: string[] = [];
    //     image: string[] = []; // urls
    //     reactionOptions: ReactionOption[] = [];
    //     textOptions: TextOption[] = [];
    //     modify: Modifier = new Modifier();
    // }

    const handleChangedId = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(setId(path, e.currentTarget.value));
    }

    const handleChangedText = (e: ChangeEvent<HTMLTextAreaElement>) => {
        dispatch(setPassageText(path, e.currentTarget.value));
    }

    const handleChangedImage = (e: ChangeEvent<HTMLTextAreaElement>) => {
        dispatch(setPassageImage(path, e.currentTarget.value));
    }

    // const handleChangedModify = (e: ChangeEvent<HTMLTextAreaElement>) => {
    //     dispatch(setPassageModify(path, e.currentTarget.value));
    // }

    return (
        <div className={`passage-editor ${className}`} >
            <div className={"passage-editor-id form"}>
                <div className={"label"}>PASSAGE ID</div>
                <input className={"textbox"} value={passage.id} onChange={handleChangedId} placeholder={"ID"}/>
            </div>
            <div className={"passage-editor-text form"}>
                <div className={"label"}>TEXT</div>
                <textarea className={"textbox"} value={passage.text} onChange={handleChangedText} placeholder={"TEXT"} rows={3}/>
            </div>
            <div className={"passage-editor-image form"}>
                <div className={"label"}>IMAGE</div>
                <textarea className={"textbox"} value={passage.image} onChange={handleChangedImage} placeholder={"IMAGE"} rows={3}/>
            </div>
            {/*<div className={"passage-editor-modify form"}>*/}
            {/*    <div className={"label"}>MODIFY</div>*/}
            {/*    <textarea className={"textbox"} value={passage.modify} onChange={handleChangedTitle} placeholder={"Title"} rows={1}/>*/}
            {/*</div>*/}
        </div>
    )
};

export default React.memo(PassageEditor);
