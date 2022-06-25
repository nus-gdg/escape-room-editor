import {get} from "lodash";
import React, {ChangeEvent} from "react";
import "./RoomEditor.css";
import {Condition, Modifier, Passage, PassageId, ReactionOption, TextOption} from "../../../state/data/data";
import {useRoot2} from "../../../hooks/useRoot2";
import FolderPath from "../../../constants/FolderPath";
import {setId, setPassageImage, setPassageText} from "../../../state/data/dataActions";

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

    const ctx = useRoot2();

    const path = ctx.store.editor.path;
    const passage: Passage = get(ctx.store, path.folders);

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
        ctx.dispatch(setId(path, e.currentTarget.value));
    }

    const handleChangedText = (e: ChangeEvent<HTMLTextAreaElement>) => {
        ctx.dispatch(setPassageText(path, e.currentTarget.value));
    }

    const handleChangedImage = (e: ChangeEvent<HTMLTextAreaElement>) => {
        ctx.dispatch(setPassageImage(path, e.currentTarget.value));
    }

    // const handleChangedModify = (e: ChangeEvent<HTMLTextAreaElement>) => {
    //     ctx.dispatch(setPassageModify(path, e.currentTarget.value));
    // }

    return (
        <div className={`passage-editor editor ${className}`} >
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
