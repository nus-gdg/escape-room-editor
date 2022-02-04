export class RoomData {
    roomName: string;
    content: ContentData;
    textCmds: TextCommandData[];
    buttonReactions: ButtonData[];
    id: number;

    constructor(id: number) {
        this.roomName = "NewRoom";
        this.content = new ContentData();
        this.textCmds = [];
        this.buttonReactions = [];
        this.id = id;
    }
}

export class ContentData {
    roomTitle: string;
    imageLink: string;
    roomDescription: string;

    constructor() {
        this.roomTitle = "";
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

    constructor() {
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
    }
}

export class ButtonData {
    buttonText: string;
    destination: string;

    constructor() {
        this.buttonText = "";
        this.destination = "";
    }
}
