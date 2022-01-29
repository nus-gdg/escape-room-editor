import {initialState, State} from "../state";
import {ActionType} from "../actions";

export const UserAction = {
    LOGIN: "USER_LOGIN",
    LOGOUT: "USER_LOGOUT"
}

export const userActions = {
    [UserAction.LOGIN]: loginUser,
    [UserAction.LOGOUT]: logoutUser
};

function loginUser(state: State, action: ActionType) {
    return { ...state, ...action.payload };
}

function logoutUser(state: State, action: ActionType) {
    return initialState;
}
