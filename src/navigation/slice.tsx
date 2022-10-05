import {NavigationAction, NavigationActionId} from "./actions";
import {Entity, EntityType} from "../entity";
import {defaultUuid} from "../constants";

export type NavigationState = Entity;

export const initialNavigation: NavigationState = {
    type: EntityType.NONE,
    id: defaultUuid,
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
