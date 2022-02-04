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
        recipe: string[];
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

//Temp decalration of variables for TESTING TODO:: remove later
export const tempContentData: ContentData = {
    roomTitle: "Amzing room",
    imageLink: "wjeufihewiufhjewif",
    roomDescription: "PLEASE WORK PLEASE",
};

export const tempTextCmdData: TextCommandData = {
    command: {
        commandKey: "use",
        recipe: ["stringOnMagenet", "magnet"],
    },

    modifyInventory: [{
        itemName: "stringOnMagnet",
        itemState: true, //either remove or add
    }],
    
    modifyFlags: [{
        flagName: "gotString",
        flagState: false,
    }],
};

export const tempRoomData: RoomData = {
    roomName: "Temp room",
    content: tempContentData,
    textCmds: [tempTextCmdData],
    buttonReactions: [],
};
