import React, {createContext, Dispatch, useReducer} from "react";
import Action from "../~actions";
import {reducer} from "../~reducer";
import Editor from "./editor";

export interface EditorContext {
    store: Editor,
    dispatch: Dispatch<Action<Editor>>;
}

const EditorStore = createContext<EditorContext>({} as EditorContext);
export default EditorStore;

export const EditorStoreProvider: React.FC = ({ children }) => {
    const [store, dispatch] = useReducer<React.Reducer<Editor, Action<Editor>>>(
        reducer,
        new Editor()
    );

    const context = { store, dispatch };
    return <EditorStore.Provider value={context}>{children}</EditorStore.Provider>;
}
