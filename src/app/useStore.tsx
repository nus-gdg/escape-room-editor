import {useContext} from "react";
import {AppStore} from "./App";

export const useStore = () => {
    return useContext(AppStore);
}
