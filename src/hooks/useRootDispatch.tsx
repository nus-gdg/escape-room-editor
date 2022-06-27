import {useContext} from "react";
import {RootDispatch} from "../common/containers/Root2";

export const useRootDispatch = () => {
    return useContext(RootDispatch);
}
