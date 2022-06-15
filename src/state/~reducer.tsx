import { cloneDeep, setWith, unset } from "lodash";
import Action from "./~actions";

/**
 * Updates the a store by deleting then adding keys.
 * @param current The original version of the store
 * @param action Lists the changes to be made to the store.
 */
export function reducer<T extends object>(current: T, action: Action<T>) {
    if (!action.set && !action.unset) {
        return current;
    }
    const next: T = cloneDeep(current);
    for (const entry of action.unsets) {
        unset(next, entry.path);
    }
    for (const entry of action.sets) {
        setWith(next, entry.path, entry.value, concatArrays);
    }
    return next;
}

function concatArrays(obj: any, src: any) {
    if (Array.isArray(obj)) {
        return obj.concat(src);
    }
}
