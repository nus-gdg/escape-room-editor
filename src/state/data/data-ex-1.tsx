import Data, {Passage} from "./data";
import {
    createFlags,
    createItems,
    createPassages,
    createReactionOptions,
    createRooms,
    createTextOptions
} from "./dataUtils";

const dataEx1: Data = new Data();
export default dataEx1;

dataEx1.rooms = createRooms(5);
for (let i = 0; i < dataEx1.rooms.length; i++) {
    dataEx1.rooms[i].passages = createPassages(5);

    for (let p0 = 0; p0 < dataEx1.rooms[i].passages.length; p0++) {
        dataEx1.rooms[i].passages[p0].textOptions = createTextOptions(5);
        dataEx1.rooms[i].passages[p0].reactionOptions = createReactionOptions(5);

        for (let t0 = 0; t0 < dataEx1.rooms[i].passages[p0].textOptions.length; t0++) {
            dataEx1.rooms[i].passages[p0].textOptions[t0].prepend = createPassages(5);
        }
        for (let r0 = 0; r0 < dataEx1.rooms[i].passages[p0].reactionOptions.length; r0++) {
            dataEx1.rooms[i].passages[p0].reactionOptions[r0].prepend = createPassages(5);
        }
    }
}

dataEx1.inventory = createItems(5);
for (let i = 0; i < dataEx1.inventory.length; i++) {
    dataEx1.inventory[i].passage = new Passage(`info`);
    dataEx1.inventory[i].passage.textOptions = createTextOptions(5);
    dataEx1.inventory[i].passage.reactionOptions = createReactionOptions(5);

    for (let t0 = 0; t0 < dataEx1.inventory[i].passage.textOptions.length; t0++) {
        dataEx1.inventory[i].passage.textOptions[t0].prepend = createPassages(5);
    }
    for (let r0 = 0; r0 < dataEx1.inventory[i].passage.reactionOptions.length; r0++) {
        dataEx1.inventory[i].passage.reactionOptions[r0].prepend = createPassages(5);
    }
}

dataEx1.flags = createFlags(10);

dataEx1.globalTextOptions = createTextOptions(10);
for (let t0 = 0; t0 < dataEx1.globalTextOptions.length; t0++) {
    dataEx1.globalTextOptions[t0].prepend = createPassages(5);
}
