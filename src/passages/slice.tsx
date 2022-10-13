import {PassageData} from "./PassageData";
import {PassagesAction} from "./actions";
import {uuid} from "../constants";
import {EntityType} from "../entity";

export type PassagesState = Record<uuid, PassageData>;

export const initialPassages: PassagesState = {
    "fef9450d-af19-4512-a26d-49740963e49e": {
        id: "fef9450d-af19-4512-a26d-49740963e49e",
        parent: {
            id: "280e4a95-9f9d-4aa0-8339-08cb7a82d10e",
            type: EntityType.ITEM,
        },
    },
    "648bb343-5ef0-4727-9b22-e77542e28363": {
        id: "648bb343-5ef0-4727-9b22-e77542e28363",
        parent: {
            id: "78dac654-8bd1-4d51-8b69-2adfeec185e8",
            type: EntityType.ITEM,
        },
    },
    "1807cb9f-bf8f-4d0a-aaaa-123870691c47": {
        id: "1807cb9f-bf8f-4d0a-aaaa-123870691c47",
        parent: {
            id: "ad65f642-325a-4b4e-9221-d276a1fca597",
            type: EntityType.ITEM,
        },
    },
};

export const passagesReducer = (state = initialPassages, action: PassagesAction) : PassagesState => {
    // return state.concat({
    //     name: `${5}`,
    // })
    // return state.map(room => ({...room, name: room.name + '!'}));
    switch (action.type) {
    //     case RoomsActionId.SET:
    //         return { ...state, action };
    //     case RoomsActionId.CLEAR:
    //         return { ...state, action };
        default:
            return state;
    }
}
