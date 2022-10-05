import {Action} from "../constants";
import {NavigationData, NavigationFolderType} from "./NavigationData";

export enum NavigationActionId {
    SET = "navigation/set",
    CLEAR = "navigation/clear",
}

export type NavigationAction =
    | SetNavigationAction
    | ClearNavigationAction;

export interface SetNavigationAction extends Action<NavigationActionId.SET> {
    payload: NavigationData;
}

export interface ClearNavigationAction extends Action<NavigationActionId.CLEAR> {
    // type: NavigationActionId.CLEAR;
    // payload: {};
}

export const setNavigation = (type: NavigationFolderType, index: number): SetNavigationAction => {
    return {
        // slice: "action",
        type: NavigationActionId.SET,
        payload: {type: type, index: index},
    }
};

export const clearNavigation = (): ClearNavigationAction => {
    return {
        // slice: "action",
        type: NavigationActionId.CLEAR,
        // payload: "",
    }
};
