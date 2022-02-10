import { Button, Flex, Text } from "@chakra-ui/react";
import React, { Component, MouseEventHandler } from "react";
import { useRoot } from "../../../hooks/useRoot";
import { ContentAction } from "../../../state/content/contentActions";
import { RoomData } from "../Data/RoomData";
import { updateRoomInList } from "../GeneralHelperFuncs";
import TextInputComponent from "./TextInputComponent";

export const RoomsNavigationComponent = () => {
    const ctx = useRoot();

    //user press button to edit another room
    function handleChangeCurrRoom(roomID: number) {
        //update currRoom data in the list
        updateRoomInList(ctx.state.currRoom, ctx);
        let nextRoom = ctx.state.rooms.find((room) => room.id === roomID);

        ctx.dispatch({
            type: ContentAction.UPDATE_CURR_ROOM,
            payload: { currRoom: nextRoom ? nextRoom : ctx.state.currRoom },
        });
    }

    //add a new room with default values
    function handleAddRoom() {
        let newRoom = new RoomData(ctx.state.rooms.length);

        ctx.dispatch({
            type: ContentAction.UPDATE_ROOMS_DATA,
            payload: { rooms: ctx.state.rooms.concat([newRoom]) },
        });
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
