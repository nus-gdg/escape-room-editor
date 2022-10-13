import {Action} from "../constants";
import {NavigationAction} from "../navigation/actions";
import {initialNavigation, navigationReducer, NavigationState} from "../navigation/slice";
import {RoomsAction} from "../rooms/actions";
import {initialRooms, roomsReducer, RoomsState} from "../rooms/slice";
import {PassagesAction} from "../passages/actions";
import {initialPassages, passagesReducer, PassagesState} from "../passages/slice";
import {ItemsAction} from "../items/actions";
import {initialItems, itemsReducer, ItemsState} from "../items/slice";

export interface Store {
    rooms: RoomsState,
    items: ItemsState,
    passages: PassagesState,
    navigation: NavigationState,
}

export const initialStore = {
    rooms: initialRooms,
    items: initialItems,
    passages: initialPassages,
    navigation: initialNavigation,
}

export const reducers = (store: Store, action: Action) : Store => {
    return {
        rooms: roomsReducer(store.rooms, action as RoomsAction),
        items: itemsReducer(store.items, action as ItemsAction),
        passages: passagesReducer(store.passages, action as PassagesAction),
        navigation: navigationReducer(store.navigation, action as NavigationAction),
    }
}
