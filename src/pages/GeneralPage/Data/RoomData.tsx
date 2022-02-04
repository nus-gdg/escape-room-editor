export type RoomData = {
    roomName: string;
    content: ContentData;
    textCmds: TextCommandData[];
    buttonReactions: ButtonData[];
}

export type ContentData = {
    roomTitle: string;
    imageLink: string;
    roomDescription: string;
}

export type TextCommandData = {
    command: {
        commandKey: string;
        recipe: [];
    }

    modifyInventory: {
        itemName: string;
        itemState: boolean; //either remove or add
    }[];
    
    modifyFlags: {
        flagName: string;
        flagState: boolean;
    }[];
}

export type ButtonData = {
    buttonText: string;
    destination: string;
}