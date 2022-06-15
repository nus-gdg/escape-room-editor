import {useContext} from "react";
import {isEmpty} from "lodash";
import EditorStore from "../state/editor/EditorStore";

export const useEditor = () => {
    const ctx = useContext(EditorStore);
    if (isEmpty(ctx)) {
        throw new Error("useEditor must be used within EditorStore.Provider")
    }
    return ctx;
}
