import {fileActions} from "./file/fileActions";
import {userActions} from "./user/userActions";
import {State} from "./state";
import {contentActions} from "./content/contentActions";

export type ActionType = {
    type: string,
    payload?: Partial<State>
}

export const actions = {
    ...contentActions,
    ...fileActions,
    ...userActions,
}
