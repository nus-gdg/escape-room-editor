import {defaultUuid, uuid} from "../../constants/uuids";

export const defaultMessageId: MessageId = "message";
export const defaultFlagId: FlagId = "flag";
export const defaultItemId: ItemId = "item";
// export const defaultModifierId: ModifierId = defaultUuid;
export const defaultConditionId: ConditionId = defaultUuid;
export const defaultTextOptionTypeId: TextOptionTypeId = "combine";
export const defaultTextOptionId: TextOptionId = defaultUuid;
export const defaultReactionOptionId: ReactionOptionId = defaultUuid;
export const defaultPassageId: PassageId = defaultUuid;
export const defaultRoomId: RoomId = "room";
export const defaultMainRoomId: RoomId = "main";

export class GameInfo {
    name: string = "";
    description: string = "";
    authors: string = "";
}

export type MessageId = string;
export class Message {
    info: PassageId = defaultPassageId;
}

export type FlagId = string;
export class Flag {
    value: number = 0; // In future may be boolean instead
}

export type ItemId = string;
export class Item {
    value: number = 0;
    info: PassageId = defaultPassageId;
}

// export type ModifierId = uuid;
export class Modifier { // Stores any modifications to state, TBC
    flags: Record<FlagId, number> = {};
    items: Record<ItemId, number> = {};
    // room: RoomId,
}

export type ConditionId = uuid;
export type ConditionOperator = "==" | "!=" | "<" | "<=" | ">" | ">=" | "&&" | "||";
export type ConditionOperand = number | string | ConditionId;
export class Condition {
    label: uuid = defaultUuid;
    op: ConditionOperator = "==";
    value: ConditionOperand = "";
    value2: ConditionOperand = "";
}

export type TextOptionTypeId = string;
export class TextOptionType {
    description: string = ""; // Key should be desc?
    regex: string = "";
}

export type TextOptionId = uuid; // Or is it better to have ItemIds separated by ~ ?
export class TextOption {
    type: TextOptionTypeId = defaultTextOptionId;
    items: ItemId[] = []
    condition: ConditionId = defaultConditionId;
    destination: RoomId = defaultRoomId;
    prepend: PassageId[] = [];
    modify: Modifier = new Modifier();
}

export type ReactionOptionId = uuid;
export class ReactionOption {
    emoji: string = ""; // Validate in colons?
    summary: string = "";
    condition: ConditionId = defaultConditionId;
    destination: RoomId = defaultRoomId;
    prepend: PassageId[] = [];
}

export type PassageId = uuid;
export class Passage {
    condition: ConditionId = defaultConditionId;
    text: string[] = [];
    image: string[] = []; // urls
    reactionOptions: ReactionOptionId[] = [];
    textOptions: TextOptionId[] = [];
    // modify: Modifier,
}

export type RoomId = string;
export class Room {
    title: string = "";
    passage: PassageId[] = [];
    modify: Modifier = new Modifier();
}

export default class Data {
    gameInfo: GameInfo = new GameInfo();
    messages: Record<MessageId, Message> = {};
    flags: Record<FlagId, Flag> = {};
    inventory: Record<ItemId, Item> = {
        potato: {
            value: 0,
            info: defaultPassageId,
        },
        carrot: {
            value: 0,
            info: defaultPassageId,
        },
        chocolate: {
            value: 0,
            info: defaultPassageId,
        },
        "ice-cream": {
            value: 0,
            info: defaultPassageId,
        },
    };
    conditions: Record<ConditionId, Condition> = {};
    passages: Record<PassageId, Passage> = {};
    textOptionTypes: Record<TextOptionTypeId, TextOptionType> = {};
    globalTextOptions: Record<TextOptionId, TextOption> = {};
    textOptions: Record<TextOptionId, TextOption> = {};
    reactionOptions: Record<ReactionOptionId, ReactionOption> = {};
    rooms: Record<RoomId, Room> = {
        home: {
            title: "Home",
            passage: [],
            modify: new Modifier(),
        },
        room1: {
            title: "Room 1",
            passage: [],
            modify: new Modifier(),
        },
        room2: {
            title: "Room 2",
            passage: [],
            modify: new Modifier(),
        },
        room3: {
            title: "Room 3",
            passage: [],
            modify: new Modifier(),
        },
    };
}
