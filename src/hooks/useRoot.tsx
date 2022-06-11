import { isEmpty } from "lodash";
import React, {useContext} from "react";
import {Root} from "../common/containers/Root";

export const useRoot = () => {
    const ctx = useContext(Root);
    if (isEmpty(ctx)) {
        throw new Error("useRoot must be used within RootStoreProvider")
    }
    return ctx;
}
