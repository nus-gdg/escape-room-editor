import { State } from "../state";
import { ActionType } from "../actions";
import { setProps } from "../../utils/setProps";
import { filterProps } from "../../utils/filterProps";

export const ContentAction = {
    SET_TITLE: "CONTENT_SET_TITLE",
    SET_DESCRIPTION: "CONTENT_SET_DESCRIPTION",
    SET_IMAGE: "CONTENT_SET_IMAGE",
    SET_FLAGS: "CONTENT_SET_FLAGS",

    UPDATE_ROOMS_DATA: "UPDATE_ROOMS_DATA",
    UPDATE_CURR_ROOM: "UPDATE_CURR_ROOM",

    UPDATE_OBJECTS: "UPDATE_OBJECTS",

    UPDATE_ROOM_NAMES: "UPDATE_ROOM_NAMES",
    UPDATE_COMMANDS: "UPDATE_COMMANDS",
    UPDATE_GAME_FLAGS: "UPDATE_FLAGS",

    UPDATE_OBJECT_NAMES: "UPDATE_OBJECT_NAMES",
};

export const contentActions = {
    [ContentAction.SET_TITLE]: setTitle,
    [ContentAction.SET_DESCRIPTION]: setDescription,
    [ContentAction.SET_IMAGE]: setImage,
    [ContentAction.SET_FLAGS]: setFlags,

    [ContentAction.UPDATE_ROOMS_DATA]: updateRooms,
    [ContentAction.UPDATE_CURR_ROOM]: updateCurrRooms,

    [ContentAction.UPDATE_COMMANDS]: updateObjects,

    [ContentAction.UPDATE_OBJECTS]: updateObjects,

    [ContentAction.UPDATE_ROOM_NAMES]: updateRoomNames,
    [ContentAction.UPDATE_COMMANDS]: updateCommands,
    [ContentAction.UPDATE_GAME_FLAGS]: updateGameFlags,

    [ContentAction.UPDATE_OBJECT_NAMES]: updateObjectNames,
};

function setTitle(state: State, action: ActionType) {
    return setProps(
        state,
        filterProps(action.payload, (key) => key === "title")
    );
}

function setDescription(state: State, action: ActionType) {
    return setProps(
        state,
        filterProps(action.payload, (key) => key === "description")
    );
}

function setImage(state: State, action: ActionType) {
    return setProps(
        state,
        filterProps(action.payload, (key) => key === "image")
    );
}

function setFlags(state: State, action: ActionType) {
    return setProps(
        state,
        filterProps(action.payload, (key) => key === "flags")
    );
}

function updateRooms(state: State, action: ActionType) {
    return setProps(
        state,
        filterProps(action.payload, (key) => key === "rooms")
    );
}

function updateCurrRooms(state: State, action: ActionType) {
    return setProps(
        state,
        filterProps(action.payload, (key) => key === "currRoom")
    );
}

function updateRoomNames(state: State, action: ActionType) {
    return setProps(
        state,
        filterProps(action.payload, (key) => key === "roomNames")
    );
}

function updateCommands(state: State, action: ActionType) {
    return setProps(
        state,
        filterProps(action.payload, (key) => key === "commands")
    );
}

function updateGameFlags(state: State, action: ActionType) {
    return setProps(
        state,
        filterProps(action.payload, (key) => key === "gameFlags")
    );
}

function updateObjects(state: State, action: ActionType) {
    return setProps(
        state,
        filterProps(action.payload, (key) => key === "objects")
    );
}

function updateObjectNames(state: State, action: ActionType) {
    return setProps(
        state,
        filterProps(action.payload, (key) => key === "objectNames")
    );
}
