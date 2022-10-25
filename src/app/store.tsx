import {configureStore, combineReducers} from "@reduxjs/toolkit";
import {
    flowReducer,
    roomsReducer,
} from "../slices";

export const reducer = combineReducers({
    flow: flowReducer,
    // items: itemsReducer,
    rooms: roomsReducer,
});

export const store = configureStore({
    reducer: reducer,
});

export type State = ReturnType<typeof reducer>;
export type Dispatch = typeof store.dispatch;
