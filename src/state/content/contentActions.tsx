import {State} from "../state";
import {ActionType} from "../actions";
import {setProps} from "../../utils/setProps";
import {filterProps} from "../../utils/filterProps";

export const ContentAction = {
    SET_TITLE: "CONTENT_SET_TITLE",
    SET_DESCRIPTION: "CONTENT_SET_DESCRIPTION",
    SET_IMAGE: "CONTENT_SET_IMAGE",
    SET_FLAGS: "CONTENT_SET_FLAGS"
}

export const contentActions = {
    [ContentAction.SET_TITLE]: setTitle,
    [ContentAction.SET_DESCRIPTION]: setDescription,
    [ContentAction.SET_IMAGE]: setImage,
    [ContentAction.SET_FLAGS]: setFlags
};

function setTitle(state: State, action: ActionType) {
    return setProps(state, filterProps(action.payload, key => key === "title"));
}

function setDescription(state: State, action: ActionType) {
    return setProps(state, filterProps(action.payload, key => key === "description"));
}

function setImage(state: State, action: ActionType) {
    return setProps(state, filterProps(action.payload, key => key === "image"));
}

function setFlags(state: State, action: ActionType) {
    return setProps(state, filterProps(action.payload, key => key === "flags"));
}
