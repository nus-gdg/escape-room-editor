import React, {useMemo} from "react";
import {useRootStore} from "../../../../hooks"
import {EditorType} from "../../../../state/editor/editor";
import PassageEditor from "./Types/PassageEditor";
import RoomEditor from "./Types/RoomEditor";
// import "./Types/RoomEditor.css";

const editors: Record<EditorType, React.FC<any> | undefined> = {
    NONE: undefined,
    SETTINGS: undefined,
    CATEGORY: undefined,
    ROOM: RoomEditor,
    ITEM: undefined,
    FLAG: undefined,
    OPTION: undefined,
    PASSAGE: PassageEditor,
}

interface EditorProps {
    className?: string,
}

const Editor = (
    {
        className = "",
    }: EditorProps) => {
    console.log("Rendered: Editor");
    const store = useRootStore();
    const memoEditor = useMemo(() => {
        const TypedEditor = editors[store.editor.type];
        if (!TypedEditor) {
            return;
        }
        return <TypedEditor/>
    }, [store.editor.type]);
    return (
        <div className={`editor ${className}`} >
            {memoEditor}
        </div>
    )
};

export default React.memo(Editor);
