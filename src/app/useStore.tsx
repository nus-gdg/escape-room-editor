import { isEmpty } from "lodash";
import React, { useContext } from "react";
import { Store } from "./store";

export const useStore = () => {
    const ctx = useContext(Store);
    if (isEmpty(ctx)) {
        throw new Error("useStore must be used within a StoreProvider")
    }
    return ctx;
}
