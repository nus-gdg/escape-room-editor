import {initialRooms, roomsReducer, RoomsState} from "../rooms/slice";
import {initialNavigation, navigationReducer, NavigationState} from "../navigation/slice";
import {RoomsAction} from "../rooms/actions";
import {NavigationAction} from "../navigation/actions";
import {Action} from "../constants";

export interface Store {
    rooms: RoomsState,
    navigation: NavigationState,
}

export const initialStore = {
    rooms: initialRooms,
    navigation: initialNavigation,
}

export const reducers = (store: Store, action: Action) : Store => {
    return {
        rooms: roomsReducer(store.rooms, action as RoomsAction),
        navigation: navigationReducer(store.navigation, action as NavigationAction),
    }
}
