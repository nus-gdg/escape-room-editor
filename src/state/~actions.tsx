import {PropertyName} from "lodash";
import RecursivePartial from "../constants/RecursivePartial";
import Store from "./store";

interface ActionEntry {
    path: PropertyName[],
    value: any,
}

export default class Action<T> {
    sets: ActionEntry[] = [];
    unsets: ActionEntry[] = [];

    set(props: RecursivePartial<T>) {
        this.sets.push(...getLeafEntries(props));
        return this;
    }

    setEntry<U>(path: PropertyName[], value: U) {
        this.sets.push({ path: path, value: value });
        return this;
    }

    unset(props: RecursivePartial<T>) {
        this.unsets.push(...getLeafEntries(props));
        return this;
    }

    unsetEntry(path: PropertyName[]) {
        this.unsets.push({ path: path, value: undefined });
        return this;
    }

    then(action: Action<T>) {
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
