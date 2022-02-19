export class RoomData {
    content: ContentData;
    textCmds: TextCommandData[];
    buttonReactions: ButtonData[];
    id: number;

    static currID = 0;

    constructor(id: number) {
        this.id = RoomData.currID;

        this.content = new ContentData(this.id);
        this.textCmds = [new TextCommandData()];
        this.buttonReactions = [];

        ++RoomData.currID;
    }
}

export class ContentData {
    title: string;
    imageLink: string;
    description: string;
    id: number;

    constructor(id: number) {
        this.title = "New";
        this.imageLink = "";
        this.description = "";
        this.id = id;
    }
}

export const InventoryAction = {
    NONE: -1,
    REMOVE_ITEM: 0,
    ADD_ITEM: 1,
};

export class TextCommandData {
    commandInput: {
        commandKey: number;
        recipe: string[];
    };

    modifyInventory: {
        itemKey: number;
        itemState: number; //either remove or add
    }[];

    modifyFlags: {
        flagKey: number;
        flagState: boolean;
    }[];

    constructor() {
        this.commandInput = { commandKey: -1, recipe: [""] };
        this.modifyInventory = [
            {
                itemKey: -1,
                itemState: InventoryAction.NONE, //either remove or add
            },
        ];

        this.modifyFlags = [
            {
                flagKey: -1,
                flagState: false,
            },
        ];
    }

    static getDefaultItemData() {
        return { itemKey: -1, itemState: InventoryAction.NONE };
    }

    static getDefaultFlagData() {
        return { flagKey: -1, flagState: false };
    }
}

export class ButtonData {
    buttonText: string;
    destination: number;
    id: number;

    constructor(id: number) {
        this.buttonText = "ddd";
        this.destination = -1;
        this.id = id;
    }

    checkValid() {
        return true;
    }
}
