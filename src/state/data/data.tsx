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

export type ConditionOperator = "==" | "!=" | "<" | "<=" | ">" | ">=" | "&&" | "||";
export type ConditionOperand = number | string | Condition;
export class Condition {
    id: EntityId = "";
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
