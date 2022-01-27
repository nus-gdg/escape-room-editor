import React, {useContext} from "react";
import {RootStore} from "../common/containers/RootStore";

export const useRootStore = () => {
    const ctx = useContext(RootStore);
    if (ctx === undefined) {
        throw new Error("useRootStore must be used within RootStoreProvider")
    }
    return ctx;
}
