import { State } from "../state/state";
import { actions, ActionType } from "../state/actions";

export const reducers = (state: State, action: ActionType) => {
    if (!actions.hasOwnProperty(action.type as string)) {
        return state;
    }
    return actions[action.type](state, action);
}
