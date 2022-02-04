import { Toolbar } from "../Toolbar/Toolbar";
import TextInput from "./components/TextInputComponent";
import RoomInfo from "./components/RoomComponent";
import ContentInfo from "./components/ContentComponent";
import React, { Component } from "react";
import { RoomData, tempRoomData } from "./Data/RoomData";
import RoomsNavigationComponent from "./components/RoomsNavigationComponent";
import { Flex } from "@chakra-ui/react";

interface Props {}

interface State {
    rooms: RoomData[]; //store all the curr rooms
    currRoom: RoomData; //the curr room data pressed
}

class GeneralPage extends React.Component<Props, State> {
    constructor(props: Props | Readonly<Props>) {
        super(props);

        this.state = {
            rooms: [tempRoomData, tempRoomData],
            currRoom: tempRoomData,
        };
    }

    handleAddRoom = () => {
        console.log(this.state.rooms.length);
        this.setState((state, props) => ({
            rooms: this.state.rooms.concat([tempRoomData]),
        }));
    };

    render() {
        return (
            <Flex direction={"row"}>
                <RoomsNavigationComponent
                    rooms={this.state.rooms}
                    onAddRoomHandler={this.handleAddRoom}
                />
                <RoomInfo />
            </Flex>
        );
    }
}

export default GeneralPage;
