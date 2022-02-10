import { Toolbar } from "../Toolbar/Toolbar";
import TextInput from "./components/TextInputComponent";
import RoomComponent from "./components/RoomComponent";
import ContentInfo from "./components/ContentComponent";
import React, { Component } from "react";
import { RoomData, ContentData, ButtonData } from "./Data/RoomData";
import RoomsNavigationComponent from "./components/RoomsNavigationComponent";
import { Flex } from "@chakra-ui/react";
import ContentComponent from "./components/ContentComponent";
import ButtonReactionComponent from "./components/ButtonReactionComponent";
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

    //add a new room with default values
    function handleAddRoom() {
        let newRoom = new RoomData(ctx.state.rooms.length);

        ctx.dispatch({
            type: ContentAction.UPDATE_ROOMS_DATA,
            payload: { rooms: ctx.state.rooms.concat([newRoom]) }
        })
    };

    //user press button to edit another room
    function handleChangeCurrRoom(roomID: number) {
        //update currRoom data in the list
        updateRoomInList(ctx.state.currRoom);
        let nextRoom = ctx.state.rooms.find((room) => room.id === roomID);

        ctx.dispatch({
            type: ContentAction.UPDATE_CURR_ROOM,
            payload: { currRoom: nextRoom ? nextRoom : ctx.state.currRoom }
        })
    };

    // //update curr Room content , id: number
    // handleUpdateContent = (newContent: ContentData) => {
    //     const updatedRoom = {
    //         ...this.state.currRoom,
    //         content: newContent,
    //     };

    //     this.updateCurrRoom(updatedRoom);
    // };

    // //add new reaction and update room content
    // handleAddReaction = () => {
    //     let updatedRoom = this.state.currRoom;
    //     updatedRoom.buttonReactions.push(
    //         new ButtonData(updatedRoom.buttonReactions.length)
    //     );

    //     this.updateCurrRoom(updatedRoom);
    // };

    // handleDelReaction = (id: number) => {
    //     let newButtonReaction = this.state.currRoom.buttonReactions.filter(
    //         (reaction) => reaction.id != id
    //     );

    //     let updatedRoom = this.state.currRoom;
    //     updatedRoom.buttonReactions = newButtonReaction;

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

    function updateRoomInList(updatedRoom: RoomData) {
        const index = ctx.state.rooms.findIndex(
            (room) => room.id === updatedRoom.id
        );

        //update the correct room in the list
        let tempRoomList = ctx.state.rooms;
        tempRoomList[index] = updatedRoom;

        //update roomList
        ctx.dispatch({
            type: ContentAction.UPDATE_ROOMS_DATA,
            payload: { rooms: tempRoomList }
        })
    };

    return (
        <Flex direction={"row"}>
            <RoomsNavigationComponent
                rooms={ctx.state.rooms}
                onAddRoom={handleAddRoom}
                onChangeRoom={handleChangeCurrRoom}
            />
            {/* <Flex direction={"column"}>
                <ContentComponent
                    contentData={this.state.currRoom.content}
                    id={this.state.currRoom.id}
                    onUpdateContent={this.handleUpdateContent}
                />
                <ButtonReactionComponent
                    buttonReactions={this.state.currRoom.buttonReactions}
                    onAddReaction={this.handleAddReaction}
                    onDelReaction={this.handleDelReaction}
                    onUpdateReaction={this.handleUpdateCurrReaction}
                />
            </Flex>
            <RoomComponent
                roomData={this.state.currRoom}
                onSubmitHandler={this.handleUpdateRoomData}
            /> */}
        </Flex>
    );
}

export default GeneralPage;
