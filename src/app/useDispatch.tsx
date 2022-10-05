import {useContext} from "react";
import {AppDispatch} from "./App";

export const useDispatch = () => {
    return useContext(AppDispatch);
}
