import {NavigationAction, NavigationActionId} from "./actions";
import {NavigationData, NavigationFolderType} from "./NavigationData";

export type NavigationState = NavigationData;

export const initialNavigation: NavigationState = {
    type: NavigationFolderType.NONE,
    index: 0,
}

export const navigationReducer = (state = initialNavigation, action: NavigationAction) : NavigationState => {
    switch (action.type) {
        case NavigationActionId.SET:
            return { ...state, ...action.payload };
        case NavigationActionId.CLEAR:
            return { ...state, ...initialNavigation };
        default:
            return state;
    }
}
