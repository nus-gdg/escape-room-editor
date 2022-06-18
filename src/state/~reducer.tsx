import { cloneDeep, set, unset } from "lodash";
import Store from "./store";
import Action from "./~actions";

/**
 * Updates the a store by deleting then adding keys.
 * @param current The original version of the store
 * @param action Lists the changes to be made to the store.
 */
export const reducer = (current: Store, action: Action) => {
    if (!action.set && !action.unset) {
        return current;
    }
    const next = cloneDeep(current);
    for (const entry of action.unsets) {
        unset(next, entry.path);
    }
    for (const entry of action.sets) {
        set(next, entry.path, entry.value);
    }
    return next;
};
