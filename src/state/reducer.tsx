import {State} from "./state";
import {actions, ActionType} from "./actions";

export const reducer = (state: State, action: ActionType) => {
    if (!actions.hasOwnProperty(action.type as string)) {
        return state;
    }
    return actions[action.type](state, action);
}
