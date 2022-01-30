import {State} from "../state";
import {ActionType} from "../actions";
import {setProps} from "../../utils/setProps";
import {filterProps} from "../../utils/filterProps";

export const ContentAction = {
    SET_TITLE: "CONTENT_SET_TITLE",
    SET_DESCRIPTION: "CONTENT_SET_DESCRIPTION",
}

export const contentActions = {
    [ContentAction.SET_TITLE]: setTitle,
    [ContentAction.SET_DESCRIPTION]: setDescription
};

function setTitle(state: State, action: ActionType) {
    return setProps(state, filterProps(action.payload, key => key === "title"));
}

function setDescription(state: State, action: ActionType) {
    return setProps(state, filterProps(action.payload, key => key === "description"));
}
