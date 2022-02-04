import { Button, Flex, Text } from "@chakra-ui/react";
import React, { Component, MouseEventHandler } from "react";
import { RoomData } from "../Data/RoomData";
import TextInputComponent from "./TextInputComponent";

interface Props {
    rooms: RoomData[];
    onAddRoom: MouseEventHandler;
    onChangeRoom: Function;
}

interface State {}

class RoomsNavigationComponent extends React.Component<Props, State> {
    render() {
        return (
            <Flex
                shrink={"0"}
                direction={"column"}
                bg={"gray"}
                style={{
                    overflowY: "scroll",
                }}
            >
                <Text fontSize="2xl"> Rooms </Text>
                <Button onClick={this.props.onAddRoom}>+</Button>
                {this.renderPropButton()}
            </Flex>
        );
    }

    renderPropButton() {
        const rooms = this.props.rooms;

        if (rooms === undefined) {
            return null;
        }

        return (
            <Flex direction={"column"} shrink={"0"}>
                {this.props.rooms.map((room, index) => {
                    return (
                        <button
                            key={index}
                            onClick={() => this.props.onChangeRoom(room.id)}
                        >
                            {room.roomName}
                        </button>
                    );
                })}
            </Flex>
        );
    }
}

export default RoomsNavigationComponent;
