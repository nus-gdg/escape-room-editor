export class EditorState {
    id: number = 0;
    type?: "PASSAGE" | "REACTION_OPTION" | "TEXT_OPTION";
}

export default class Editor {
    id: string = "";
    type?: "SETTINGS" | "ROOM" | "ITEM";
    history: EditorState[] = [];
}
