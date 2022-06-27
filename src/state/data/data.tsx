export class GameInfo {
    name: string = "";
    description: string = "";
    authors: string = "";
}

export type EntityId = string;
export abstract class Entity {
    id: EntityId;
    constructor(id: EntityId) {
        this.id = id;
    }
}

export class Flag extends Entity {
    value: number = 0; // In future may be boolean instead
}

export class Item extends Entity {
    passage: Passage = new Passage("info");
}

export class Modifier { // Stores any modifications to state, TBC
    flags: Record<EntityId, number> = {};
    items: Record<EntityId, number> = {};
}

const defaultConditionId: ConditionId = "~";
export type ConditionId = `~${string}`;
export type ConditionOperator = "==" | "!=" | "<" | "<=" | ">" | ">=" | "&&" | "||";
export type ConditionOperand = number | string | Condition;
export class Condition {
    id: ConditionId = defaultConditionId;
    op: ConditionOperator = "==";
    value: ConditionOperand = "";
    value2: ConditionOperand = "";
}

export class TextOptionType extends Entity {
    description: string = ""; // Key should be desc?
    regex: string = "";
}

export abstract class Option extends Entity {
    conditions: Condition[] = [];
    destination: EntityId = "";
    modify: Modifier = new Modifier();
    prepend: Passage[] = [];
}

export class TextOption extends Option { // Or is it better to have ItemIds separated by ~ ?
    type: EntityId = "";
    items: EntityId[] = [];
}

export class ReactionOption extends Option {
    emoji: string = ""; // Validate in colons?
    summary: string = "";
}

export class Passage extends Entity {
    conditions: Condition[] = [];
    text: string[] = [];
    image: string[] = []; // urls
    reactionOptions: ReactionOption[] = [];
    textOptions: TextOption[] = [];
    modify: Modifier = new Modifier();
}

export class Room extends Entity {
    title: string = "";
    passages: Passage[] = [];
}

export default class Data {
    gameInfo: GameInfo = new GameInfo();
    initialRoom: EntityId = "";
    textOptionTypes: TextOptionType[] = [];

    rooms: Room[] = [];
    inventory: Item[] = [];
    flags: Flag[] = [];
    globalTextOptions: TextOption[] = [];
}

// export const testData: Data = new Data();
// testData.rooms = [
//     new Room("r0"),
//     new Room("r1"),
//     new Room("r2"),
// ]
// testData.rooms[0].title = "ROOM 0";
// testData.rooms[1].title = "ROOM 1";
// testData.rooms[2].title = "ROOM 2";
//
// testData.rooms[0].passages = [
//     new Passage("r0p0"),
//     new Passage("r0p1"),
//     new Passage("r0p2")
// ];
//
// testData.rooms[0].passages[0].reactionOptions = [
//     new ReactionOption("r0p0ro0"),
//     new ReactionOption("r0p0ro1"),
//     new ReactionOption("r0p0ro2")
// ];
// testData.rooms[0].passages[0].textOptions = [
//     new TextOption(),
//     new TextOption(),
//     new TextOption()
// ];
//
// testData.rooms[0].passages[1].reactionOptions = [new ReactionOption(), new ReactionOption(), new ReactionOption()];
// testData.rooms[0].passages[1].textOptions = [new TextOption(), new TextOption(), new TextOption()];
//
// testData.rooms[0].passages[2].reactionOptions = [new ReactionOption(), new ReactionOption(), new ReactionOption()];
// testData.rooms[0].passages[2].textOptions = [new TextOption(), new TextOption(), new TextOption()];
//
// testData.rooms[0].passages[0].reactionOptions[0].id = "r0p0e0"
// testData.rooms[0].passages[0].reactionOptions[1].id = "r0p0e1"
// testData.rooms[0].passages[0].reactionOptions[2].id = "r0p0e2"
// testData.rooms[0].passages[0].textOptions[0].id = "r0p0t0"
// testData.rooms[0].passages[0].textOptions[1].id = "r0p0t1"
// testData.rooms[0].passages[0].textOptions[2].id = "r0p0t2"
//
// testData.rooms[0].passages[1].reactionOptions[0].id = "r0p1e0"
// testData.rooms[0].passages[1].reactionOptions[1].id = "r0p1e1"
// testData.rooms[0].passages[1].reactionOptions[2].id = "r0p1e2"
// testData.rooms[0].passages[1].textOptions[0].id = "r0p1t0"
// testData.rooms[0].passages[1].textOptions[1].id = "r0p1t1"
// testData.rooms[0].passages[1].textOptions[2].id = "r0p1t2"
//
// testData.rooms[0].passages[2].reactionOptions[0].id = "r0p2e0"
// testData.rooms[0].passages[2].reactionOptions[1].id = "r0p2e1"
// testData.rooms[0].passages[2].reactionOptions[2].id = "r0p2e2"
// testData.rooms[0].passages[2].textOptions[0].id = "r0p2t0"
// testData.rooms[0].passages[2].textOptions[1].id = "r0p2t1"
// testData.rooms[0].passages[2].textOptions[2].id = "r0p2t2"
//
// testData.inventory = [
//     new Item("i0"),
//     new Item("i1"),
//     new Item("i2")
// ];
