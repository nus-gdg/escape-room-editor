// import {Action} from "../constants";
// import {NavigationAction} from "../navigation/actions";
// import {initialNavigation, navigationReducer, NavigationState} from "../navigation/slice";
// import {RoomsAction} from "../rooms/actions";
// import roomsReducer, {initialRooms, RoomsState} from "../rooms/slice";
// import {PassagesAction} from "../passages/actions";
// import {initialPassages, passagesReducer, PassagesState} from "../passages/slice";
// import {ItemsAction} from "../items/actions";
// import {initialItems, itemsReducer, ItemsState} from "../items/slice";
import {configureStore, combineReducers} from "@reduxjs/toolkit";
import {flowReducer} from "../flow/slice";
import {roomsReducer} from "../rooms/slice";

// export interface Store {
//     // rooms: RoomsState,
//     items: ItemsState,
//     passages: PassagesState,
//     navigation: NavigationState,
// }
//
// export const initialStore = {
//     // rooms: initialRooms,
//     items: initialItems,
//     passages: initialPassages,
//     navigation: initialNavigation,
// }
//
// export const reducers = (store: Store, action: Action) : Store => {
//     return {
//         // rooms: roomsReducer(store.rooms, action as RoomsAction),
//         items: itemsReducer(store.items, action as ItemsAction),
//         passages: passagesReducer(store.passages, action as PassagesAction),
//         navigation: navigationReducer(store.navigation, action as NavigationAction),
//     }
// }

export const reducer = combineReducers({
    flow: flowReducer,
    rooms: roomsReducer,
});

export const store = configureStore({
    reducer: reducer,
});

export type State = ReturnType<typeof reducer>;
export type Dispatch = typeof store.dispatch;
