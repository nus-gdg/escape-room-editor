import {NavigationAction, NavigationActionId} from "./actions";
import {Entity, EntityType} from "../entity";

export type NavigationState = Entity;

export const initialNavigation: NavigationState = {
    type: EntityType.NONE,
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
