import {initialRooms, roomsReducer, RoomsState} from "../rooms/slice";
import {initialNavigation, navigationReducer, NavigationState} from "../navigation/slice";
import {RoomsAction} from "../rooms/actions";
import {NavigationAction} from "../navigation/actions";
import {Action} from "../constants";
import {initialPassages, passagesReducer, PassagesState} from "../passages/slice";
import {PassagesAction} from "../passages/actions";

export interface Store {
    rooms: RoomsState,
    passages: PassagesState,
    navigation: NavigationState,
}

export const initialStore = {
    rooms: initialRooms,
    passages: initialPassages,
    navigation: initialNavigation,
}

export const reducers = (store: Store, action: Action) : Store => {
    return {
        rooms: roomsReducer(store.rooms, action as RoomsAction),
        passages: passagesReducer(store.passages, action as PassagesAction),
        navigation: navigationReducer(store.navigation, action as NavigationAction),
    }
}
