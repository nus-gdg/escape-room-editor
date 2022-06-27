// import { cloneDeep, setWith, set, unset } from "lodash";
import { set, unset } from "lodash/fp";
import Action from "./~actions";

/**
 * Updates the a store by deleting then adding keys.
 * @param store The original version of the store
 * @param action Lists the changes to be made to the store.
 */
export function reducer<T extends object>(store: T, action: Action<T>) {
    if (!action.set && !action.unset) {
        return store;
    }
    let next = store;
    for (const entry of action.unsets) {
        next = unset(entry.path, next);
    }
    for (const entry of action.sets) {
        next = set(entry.path, entry.value, next);//, concatArrays);
    }
    return next;
}

// function concatArrays(obj: any, src: any) {
//     if (Array.isArray(obj)) {
//         return obj.concat(src);
//     }
// }
