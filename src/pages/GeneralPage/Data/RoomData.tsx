interface UniqueID {
    [key: number]: string;
}

export class RoomData {
    content: ContentData;
    textCmds: TextCommandData[];
    buttonReactions: ButtonData[];
    id: number;

    static currID = 0;

    static roomNames: UniqueID = {};

    constructor(id: number) {
        this.content = new ContentData();
        this.textCmds = [];
        this.buttonReactions = [];
        this.id = RoomData.currID;

        ++RoomData.currID;
        RoomData.roomNames[RoomData.currID] = this.content.roomTitle;
    }
}

export class ContentData {
    roomTitle: string;
    imageLink: string;
    roomDescription: string;

    constructor() {
        this.roomTitle = "NewRoom";
        this.imageLink = "";
        this.roomDescription = "";
    }
}

export class TextCommandData {
    command: {
        commandKey: string;
        recipe: string[];
    };

    modifyInventory: {
        itemName: string;
        itemState: boolean; //either remove or add
    }[];

    modifyFlags: {
        flagName: string;
        flagState: boolean;
    }[];

    id: number;

    constructor(id: number) {
        this.command = { commandKey: "", recipe: [""] };
        this.modifyInventory = [
            {
                itemName: "stringOnMagnet",
                itemState: true, //either remove or add
            },
        ];

        this.modifyFlags = [
            {
                flagName: "gotString",
                flagState: false,
            },
        ];

        this.id = id;
    }
}

export class ButtonData {
    buttonText: string;
    destination: string;
    id: number;

    constructor(id: number) {
        this.buttonText = "ddd";
        this.destination = "";
        this.id = id;
    }

    checkValid() {
        return true;
    }
}
