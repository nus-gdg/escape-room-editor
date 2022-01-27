import {initialState, State} from "../state";
import {UserAction} from "./userActions";

export type ActionType = {
    type: UserAction,
    payload?: State
};

export const userReducer = (state: State, { type, payload }: ActionType) => {
    switch (type) {
        case UserAction.LOGIN:
            return {...state, ... payload };
        case UserAction.LOGOUT:
            return initialState;
        default:
            return state;
    }
};
