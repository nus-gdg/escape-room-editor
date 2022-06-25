export class GameInfo {
    name: string = "";
    description: string = "";
    authors: string = "";
}

export type FlagId = string;
export class Flag {
    id: FlagId = "";
    value: number = 0; // In future may be boolean instead
}

export type ItemId = string;
export class Item {
    id: ItemId;
    passage: Passage = new Passage("info");

    constructor(id: string) {
        this.id = id;
    }
}

export class Modifier { // Stores any modifications to state, TBC
    flags: Record<FlagId, number> = {};
    items: Record<ItemId, number> = {};
}

const defaultConditionId: ConditionId = "~";
export type ConditionId = `~${string}`;
export type ConditionOperator = "==" | "!=" | "<" | "<=" | ">" | ">=" | "&&" | "||";
export type ConditionOperand = number | string | ConditionId;
export class Condition {
    id: ConditionId = defaultConditionId;
    op: ConditionOperator = "==";
    value: ConditionOperand = "";
    value2: ConditionOperand = "";
}

export type TextOptionTypeId = string;
export class TextOptionType {
    id: TextOptionTypeId = "";
    description: string = ""; // Key should be desc?
    regex: string = "";
}

export type TextOptionId = string; // Or is it better to have ItemIds separated by ~ ?
export class TextOption {
    id: TextOptionId = "";
    type: TextOptionTypeId = "";
    items: ItemId[] = []
    conditions: Condition[] = [];
    destination: RoomId = "";
    modify: Modifier = new Modifier();
    prepend: Passage[] = [];
}

export type ReactionOptionId = string;
export class ReactionOption {
    id: ReactionOptionId = "";
    emoji: string = ""; // Validate in colons?
    summary: string = "";
    conditions: Condition[] = [];
    destination: RoomId = "";
    modify: Modifier = new Modifier();
    prepend: Passage[] = [];
}

export type PassageId = string;
export class Passage {
    id: PassageId = "";
    conditions: Condition[] = [];
    text: string[] = [];
    image: string[] = []; // urls
    reactionOptions: ReactionOption[] = [];
    textOptions: TextOption[] = [];
    modify: Modifier = new Modifier();

    constructor(id: string) {
        this.id = id;
    }
}

export type RoomId = string;
export class Room {
    id: RoomId;
    title: string = "";
    passages: Passage[] = [];

    constructor(id: string) {
        this.id = id;
    }
}

export default class Data {
    gameInfo: GameInfo = new GameInfo();
    initialRoom: RoomId = "";
    textOptionTypes: TextOptionType[] = [];

    rooms: Room[] = [];
    inventory: Item[] = [];
    flags: Flag[] = [];
    globalTextOptions: TextOption[] = [];
}

export const testData: Data = new Data();
testData.rooms = [
    new Room("r0"),
    new Room("r1"),
    new Room("r2"),
]
testData.rooms[0].title = "ROOM 0";
testData.rooms[1].title = "ROOM 1";
testData.rooms[2].title = "ROOM 2";

testData.rooms[0].passages = [
    new Passage("r0p0"),
    new Passage("r0p1"),
    new Passage("r0p2")
];

testData.rooms[0].passages[0].reactionOptions = [new ReactionOption(), new ReactionOption(), new ReactionOption()];
testData.rooms[0].passages[0].textOptions = [new TextOption(), new TextOption(), new TextOption()];

testData.rooms[0].passages[1].reactionOptions = [new ReactionOption(), new ReactionOption(), new ReactionOption()];
testData.rooms[0].passages[1].textOptions = [new TextOption(), new TextOption(), new TextOption()];

testData.rooms[0].passages[2].reactionOptions = [new ReactionOption(), new ReactionOption(), new ReactionOption()];
testData.rooms[0].passages[2].textOptions = [new TextOption(), new TextOption(), new TextOption()];

testData.rooms[0].passages[0].reactionOptions[0].id = "r0p0e0"
testData.rooms[0].passages[0].reactionOptions[1].id = "r0p0e1"
testData.rooms[0].passages[0].reactionOptions[2].id = "r0p0e2"
testData.rooms[0].passages[0].textOptions[0].id = "r0p0t0"
testData.rooms[0].passages[0].textOptions[1].id = "r0p0t1"
testData.rooms[0].passages[0].textOptions[2].id = "r0p0t2"

testData.rooms[0].passages[1].reactionOptions[0].id = "r0p1e0"
testData.rooms[0].passages[1].reactionOptions[1].id = "r0p1e1"
testData.rooms[0].passages[1].reactionOptions[2].id = "r0p1e2"
testData.rooms[0].passages[1].textOptions[0].id = "r0p1t0"
testData.rooms[0].passages[1].textOptions[1].id = "r0p1t1"
testData.rooms[0].passages[1].textOptions[2].id = "r0p1t2"

testData.rooms[0].passages[2].reactionOptions[0].id = "r0p2e0"
testData.rooms[0].passages[2].reactionOptions[1].id = "r0p2e1"
testData.rooms[0].passages[2].reactionOptions[2].id = "r0p2e2"
testData.rooms[0].passages[2].textOptions[0].id = "r0p2t0"
testData.rooms[0].passages[2].textOptions[1].id = "r0p2t1"
testData.rooms[0].passages[2].textOptions[2].id = "r0p2t2"

testData.inventory = [
    new Item("i0"),
    new Item("i1"),
    new Item("i2")
];
