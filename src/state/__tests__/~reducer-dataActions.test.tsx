import {cloneDeep} from "lodash";
import {reducer} from "../~reducer";
import Store from "../store";
import {Passage, PassageId, Room, RoomId} from "../data/data";
import {addPassage, addRoom, setRoomPassages} from "../data/dataActions";

test("addRoom", () => {
    const expected = new Store();

    // Step 1: Room "kitchen" added to rooms
    const roomId: RoomId = "kitchen";
    expected.data.rooms[roomId] = new Room();

    const store = new Store();
    const step1 = reducer(store, addRoom(roomId));
    expect(store).toEqual(new Store()); // Adding room should be immutable
    expect(step1).toEqual(expected); // Is new room added?

    // Step 2: Passage "~view_sink" added to "kitchen"
    const passageId: PassageId = "~view_sink";
    const passage1 = new Passage();
    const passages1 = step1.data.rooms[roomId].passage;
    expected.data.rooms[roomId].passage = [passageId];
    expected.data.passages[passageId] = passage1;

    const step1Bak = cloneDeep(step1);
    const step2 = reducer(step1, addPassage(passageId, passage1)
            .then(setRoomPassages(roomId, passages1.concat(passageId))));
    expect(step1).toEqual(step1Bak); // Adding room passage should be immutable
    expect(step2).toEqual(expected); // Is new passage added + listed in room?
})
