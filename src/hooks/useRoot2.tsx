import React, {useContext} from "react";
import Root2 from "../common/containers/Root2";
import {isEmpty} from "lodash";

export const useRoot2 = () => {
    const ctx = useContext(Root2);
    if (isEmpty(ctx)) {
        throw new Error("useRoot must be used within RootStoreProvider")
    }
    return ctx;
}
