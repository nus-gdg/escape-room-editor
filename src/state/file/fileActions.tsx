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
    // TODO: Create utility function to select desired properties (for validation)
    // Without validation, alternative is to use spread operator { ...state, ...action.payload }
    if (!action.payload?.username) {
        return state;
    }
    const shallowCopy = { ...state };
    shallowCopy.username = action.payload.username;
    return shallowCopy;
}

function saveFile(state: State, action: ActionType) {
    return initialState;
}
