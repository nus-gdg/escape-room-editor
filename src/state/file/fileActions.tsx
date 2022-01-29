import {initialState, State} from "../state";
import {ActionType} from "../actions";

export const FileAction = {
    LOAD: "FILE_LOAD",
    SAVE: "FILE_SAVE"
}

export const fileActions = {
    [FileAction.LOAD]: loadFile,
    [FileAction.SAVE]: saveFile
};

function loadFile(state: State, action: ActionType) {
    return { ...state, ...action.payload };
}

function saveFile(state: State, action: ActionType) {
    return initialState;
}
