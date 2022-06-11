import React from "react";
import Store from "../store";
import Action from "../~actions";
import {reducer} from "../~reducer";
import {Room, RoomId} from "../data/data";
import {defaultUuid} from "../../constants/uuids";
import { cloneDeep } from "lodash";

test("reducer: update store.data.rooms[k] - check immutable", () => {
    const roomId: RoomId = "hall";
    const room: Room = {
        title: "",
        passage: [ defaultUuid ],
        modify: {
            flags: { "unlocked_door": 1 },
            items: { "potato": 2 },
        },
    };
    const editedRoom: Room = {
        title: "Hall of Potatoes",
        passage: [ `~other-uuid` ], // Check duplicates are removed from arrays
        modify: {
            flags: { }, // Check overwritten key
            items: { "potato": 2, "carrot": 3 }, // Check inserted key
        },
    };
    const action = new Action()
        .set({data: {rooms: {[roomId]: {
                        title: editedRoom.title,
                        passage: editedRoom.passage,
                        modify: {
                            items: { "carrot": 3 }
                        }
                    }}}})
        .unset({data: {rooms: {[roomId]: {
                        modify: {
                            flags: {
                                "unlocked_door": undefined,
                            }
                        }
                    }}}});
    const init = new Store();
    const expected = new Store();
    init.data.rooms[roomId] = room;
    expected.data.rooms[roomId] = editedRoom;

    const store = cloneDeep(init);

    const actual = reducer(store, action);
    expect(store).toEqual(init); // Result should be immutable
    expect(actual).toEqual(expected); // Result should only apply payload modifications
})
