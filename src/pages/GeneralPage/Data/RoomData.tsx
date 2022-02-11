export class RoomData {
    content: ContentData;
    textCmds: TextCommandData[];
    buttonReactions: ButtonData[];
    id: number;

    static currID = 0;

    constructor(id: number) {
        this.id = RoomData.currID;

        this.content = new ContentData(this.id);
        this.textCmds = [new TextCommandData(0)];
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

export class TextCommandData {
    command: {
        commandKey: number;
        recipe: string[];
    };

    modifyInventory: {
        itemName: number;
        itemState: boolean; //either remove or add
    }[];

    modifyFlags: {
        flagName: number;
        flagState: boolean;
    }[];

    id: number;

    constructor(id: number) {
        this.command = { commandKey: -1, recipe: [""] };
        this.modifyInventory = [
            {
                itemName: -1,
                itemState: true, //either remove or add
            },
        ];

        this.modifyFlags = [
            {
                flagName: -1,
                flagState: false,
            },
        ];

        this.id = id;
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
