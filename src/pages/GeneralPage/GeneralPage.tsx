import { Toolbar } from "../Toolbar/Toolbar";
import TextInput from "./components/TextInputComponent";
import React, { Component } from "react";
import { RoomData, ContentData, ButtonData } from "./Data/RoomData";
import RoomsNavigationComponent from "./components/RoomsNavigationComponent";
import { Flex } from "@chakra-ui/react";
import { ContentComponent } from "./components/ContentComponent";
import { ButtonReactionComponent } from "./components/ButtonReactionComponent";
import { useRoot } from "../../hooks/useRoot";
import { ContentAction } from "../../state/content/contentActions";

interface Props {}

interface State {
    // rooms: RoomData[]; //store all the curr rooms
    // currRoom: RoomData; //the curr room data pressed

    flags: {}; //key-value, id-flagName
    commandNames: {}; //key-value, id-commandName
    roomNames: {}; //key-value pair, id-roomName
}

//props: Props
export const GeneralPage = () => {
    const ctx = useRoot();

    // constructor(props: Props | Readonly<Props>) {
    //     super(props);

    //     let tempRoomList = [new RoomData(0), new RoomData(1)];

    //     this.state = {
    //         rooms: tempRoomList,
    //         currRoom: tempRoomList[0],
    //         flags: { "1": "foundString", "2": "foundMagnet" },
    //         commandNames: { "1": "Use", "2": "kick" },
    //         roomNames: { "0": "Room1", "1": "Room2" },
    //     };

    //     console.log(this.state.currRoom);
    // }

    // //update curr Room content , id: number
    // handleUpdateContent = (newContent: ContentData) => {
    //     const updatedRoom = {
    //         ...this.state.currRoom,
    //         content: newContent,
    //     };

    //     this.updateCurrRoom(updatedRoom);
    // };

    // //updates curr room reaction value
    // handleUpdateCurrReaction = (
    //     index: number,
    //     updatedButtonReaction: ButtonData
    // ) => {
    //     let updatedRoom = this.state.currRoom;

    //     updatedRoom.buttonReactions[index] = updatedButtonReaction;
    //     this.updateCurrRoom(updatedRoom);
    // };

    // //update room data with new room data
    // updateCurrRoom = (updatedRoom: RoomData) => {
    //     //update currRoom content
    //     this.setState({
    //         currRoom: updatedRoom,
    //     });
    // };

    return (
        <Flex direction={"row"}>
            <RoomsNavigationComponent />
            <Flex direction={"column"}>
                <ContentComponent />
                <ButtonReactionComponent roomData={ctx.state.currRoom} />
            </Flex>
        </Flex>
    );
};
