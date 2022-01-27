import {initialState, StateType} from "./StateType";
import {Action} from "./Actions";
import {stat} from "fs";

export type ActionType = {
    type: Action,
    payload?: StateType
};

export const reducer = (state: StateType, { type, payload }: ActionType) => {
    switch (type) {
        case Action.LOGIN:
            return {...state, ... payload };
        case Action.LOGOUT:
            return initialState;
        default:
            return state;
    }
};
