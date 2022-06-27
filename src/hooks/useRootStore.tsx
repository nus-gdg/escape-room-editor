import {useContext} from "react";
import {RootStore} from "../common/containers/Root2";

export const useRootStore = () => {
    return useContext(RootStore);
}
