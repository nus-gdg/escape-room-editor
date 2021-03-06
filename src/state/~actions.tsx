import {PropertyName} from "lodash";
import RecursivePartial from "../constants/RecursivePartial";
import Store from "./store";

interface ActionEntry {
    path: PropertyName[],
    value: any,
}

export default class Action {
    sets: ActionEntry[] = [];
    unsets: ActionEntry[] = [];

    set(props: RecursivePartial<Store>) {
        this.sets.push(...getLeafEntries(props));
        return this;
    }

    unset(props: RecursivePartial<Store>) {
        this.unsets.push(...getLeafEntries(props));
        return this;
    }

    then(action: Action) {
        for (const set of action.sets) {
            this.sets.push(set);
        }
        for (const unset of action.unsets) {
            this.unsets.push(unset);
        }
        return this;
    }
}

function getLeafEntries<T>(value: T): ActionEntry[]  {
    const leafEntries: ActionEntry[] = [];
    function getLeafEntriesHelper<T>(value: T, path: PropertyName[])  {
        // Non-objects are leaf entries
        if (typeof value !== "object" || Array.isArray(value)) {
            leafEntries.push({ path: path, value: value });
            return;
        }
        // Empty objects are leaf entries
        const entries = Object.entries(value);
        if (entries.length === 0) {
            leafEntries.push({ path: path, value: value });
            return;
        }
        // Recurse for nested entries
        for (const [k, v] of entries) {
            getLeafEntriesHelper(v, path.concat(k));
        }
    }
    getLeafEntriesHelper(value, []);
    return leafEntries;
}
