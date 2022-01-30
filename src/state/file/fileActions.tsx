import {isKeyOfState, initialState, State} from "../state";
import {ActionType} from "../actions";
import {setProps} from "../../utils/setProps";
import {filterProps} from "../../utils/filterProps";

export const FileAction = {
    LOAD: "FILE_LOAD",
    SAVE: "FILE_SAVE"
}

export const fileActions = {
    [FileAction.LOAD]: loadFile,
    [FileAction.SAVE]: saveFile
};

function loadFile(state: State, action: ActionType) {
    return setProps(state, filterProps(action.payload, isKeyOfState));
}

function saveFile(state: State, action: ActionType) {
    return initialState;
}
