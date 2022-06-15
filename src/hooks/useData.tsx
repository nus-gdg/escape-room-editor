import {useContext} from "react";
import {isEmpty} from "lodash";
import DataStore from "../state/data/DataStore";

export const useData = () => {
    const ctx = useContext(DataStore);
    if (isEmpty(ctx)) {
        throw new Error("useData must be used within DataStore.Provider")
    }
    return ctx;
}
