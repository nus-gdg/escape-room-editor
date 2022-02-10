import { Button, Flex, Text } from "@chakra-ui/react";
import React, { Component, MouseEventHandler } from "react";
import { useRoot } from "../../../hooks/useRoot";
import { ContentAction } from "../../../state/content/contentActions";
import { RoomData } from "../Data/RoomData";
import {
    updateCurrRoom,
    updateRoomInList,
    updateRoomList,
} from "../GeneralHelperFuncs";
import TextInputComponent from "./TextInputComponent";

export const RoomsNavigationComponent = () => {
    const ctx = useRoot();

    //user press button to edit another room
    function handleChangeCurrRoom(roomID: number) {
        //'save' currRoom data in the list
        //updateRoomInList(ctx.state.currRoom, ctx);
        let nextRoom = ctx.state.rooms.find((room) => room.id === roomID);

        //if there is a next room, change the currRoom to next Room
        if (nextRoom) {
            updateCurrRoom(nextRoom, ctx);
        }
    }

    //add a new room with default values
    function handleAddRoom() {
        let newRoom = new RoomData(ctx.state.rooms.length);
        updateRoomList(ctx.state.rooms.concat([newRoom]), ctx);
    }

    function renderPropButton() {
        const rooms = ctx.state.rooms;

        if (rooms === undefined) {
            return null;
        }

        return (
            <Flex direction={"column"} shrink={"0"}>
                {ctx.state.rooms.map((room, index) => {
                    return (
                        <button
                            key={index}
                            onClick={() => handleChangeCurrRoom(room.id)}
                        >
                            {room.content.roomTitle}
                        </button>
                    );
                })}
            </Flex>
        );
    }

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
            <Button onClick={() => handleAddRoom()}>+</Button>
            {renderPropButton()}
        </Flex>
    );
};

export default RoomsNavigationComponent;
