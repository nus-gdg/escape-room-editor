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

interface Props {}

interface State {
    rooms: RoomData[]; //store all the curr rooms
    currRoom: RoomData; //the curr room data pressed

    flags: string[];
    commandNames: string[];
}

class GeneralPage extends React.Component<Props, State> {
    constructor(props: Props | Readonly<Props>) {
        super(props);

        let tempRoomList = [new RoomData(0), new RoomData(1)];

        this.state = {
            rooms: tempRoomList,
            currRoom: tempRoomList[0],
            flags: ["foundString", "foundMagnet"],
            commandNames: ["Use", "kick"],
        };
    }

    //add a new room with default values
    handleAddRoom = () => {
        let newRoom = new RoomData(this.state.rooms.length);
        this.setState((state, props) => ({
            rooms: this.state.rooms.concat([newRoom]),
        }));
    };

    //user press button to edit another room
    handleChangeCurrRoom = (roomID: number) => {
        let nextRoom = this.state.rooms.find((room) => room.id === roomID);
        this.setState((state, props) => ({
            currRoom: nextRoom ? nextRoom : state.currRoom,
        }));
    };

    //update room data with new room data
    handleUpdateRoomData = (roomData: RoomData) => {
        // Update main state that holds all Rooms i.e. RoomData[]
        let newRoomList = this.state.rooms.filter((r) => r.id !== roomData.id);
        newRoomList.push(roomData);
        this.setState((state, props) => ({
            rooms: newRoomList,
        }));
    };

    //update curr Room content , id: number
    handleUpdateContent = (newContent: ContentData) => {
        const index = this.state.rooms.indexOf(this.state.currRoom);
        const updatedRoom = {
            ...this.state.currRoom,
            content: newContent,
        };

        let tempRoomList = this.state.rooms;
        tempRoomList[index] = updatedRoom;

        //update currRoom content
        this.setState({
            rooms: tempRoomList,
            currRoom: updatedRoom,
        });
    };

    //add new reaction and update room content
    handleAddReaction = () => {
        const index = this.state.rooms.indexOf(this.state.currRoom);

        let updatedRoom = this.state.currRoom;
        updatedRoom.buttonReactions.push(
            new ButtonData(updatedRoom.buttonReactions.length)
        );

        let tempRoomList = this.state.rooms;
        tempRoomList[index] = updatedRoom;

        //update currRoom content
        this.setState({
            rooms: tempRoomList,
            currRoom: updatedRoom,
        });
    };

    render() {
        return (
            <Flex direction={"row"}>
                <RoomsNavigationComponent
                    rooms={this.state.rooms}
                    onAddRoom={this.handleAddRoom}
                    onChangeRoom={this.handleChangeCurrRoom}
                />
                <Flex direction={"column"}>
                    <ContentComponent
                        contentData={this.state.currRoom.content}
                        id={this.state.currRoom.id}
                        onUpdateContent={this.handleUpdateContent}
                    />
                    <ButtonReactionComponent
                        buttonReactions={this.state.currRoom.buttonReactions}
                        onAddCmd={this.handleAddReaction}
                    />
                </Flex>
                {/* <RoomComponent
                    roomData={this.state.currRoom}
                    onSubmitHandler={this.handleUpdateRoomData}
                /> */}
            </Flex>
        );
    }
}

export default GeneralPage;
