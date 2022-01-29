import {fileActions} from "./file/fileActions";
import {userActions} from "./user/userActions";
import {State} from "./state";

export type ActionType = {
    type: string,
    payload?: Partial<State>
}

export const actions = {
    ...fileActions,
    ...userActions,
}
