import { Toolbar } from "../Toolbar/Toolbar";
import TextInput from "./components/TextInputComponent";
import React, { Component } from "react";
import { RoomData, ContentData, ButtonData } from "./Data/RoomData";
import ContentNavigationComponent from "./components/ContentNavigationComponent";
import { Flex } from "@chakra-ui/react";
import { ContentComponent } from "./components/ContentComponent";
import { ButtonReactionComponent } from "./components/ButtonReactionComponent";
import { useRoot } from "../../hooks/useRoot";
import { ContentAction } from "../../state/content/contentActions";
import { ListHashMapComponent } from "./components/ListHashMapComponent";
import {
    deleteValueInHashmap,
    updateCurrRoom,
    updateHashMap,
    updateRoomInList,
    updateRoomList,
} from "./GeneralHelperFuncs";
import { TextCommandsComponent } from "./components/TextCommandsComponent";

export const GeneralPage = () => {
    const ctx = useRoot();

    function handleChangeCurrRoom(nextRoomId: number) {
        //'save' currRoom data in the list
        updateRoomInList(ctx.state.currRoom, ctx);
        let nextRoom = ctx.state.rooms.find((room) => room.id === nextRoomId);

        //if there is a next room, change the currRoom to next Room
        if (nextRoom) {
            updateCurrRoom(nextRoom, ctx);
        }
    }

    function handleAddRoom() {
        let newRoom = new RoomData(ctx.state.rooms.length);
        updateRoomList(ctx.state.rooms.concat([newRoom]), ctx);

        //add name to hashmap
        updateHashMap(
            newRoom.id,
            newRoom.content.roomTitle,
            ctx.state.roomNames,
            ContentAction.UPDATE_ROOM_NAMES,
            "roomNames",
            ctx
        );
    }

    function handleUpdateRoomContent(
        updatedContent: ContentData,
        varName: keyof ContentData
    ) {
        let updatedRoom = {
            ...ctx.state.currRoom,
            content: updatedContent,
        };

        updateCurrRoom(updatedRoom, ctx);

        //if room name has been updated, update the unique value hashmap
        if (varName === "roomTitle") {
            updateHashMap(
                updatedRoom.id,
                updatedRoom.content.roomTitle,
                ctx.state.roomNames,
                ContentAction.UPDATE_ROOM_NAMES,
                "roomNames",
                ctx
            );
        }
    }

    function handleUpdateCommands(keyID: number, newName: string) {
        updateHashMap(
            keyID,
            newName,
            ctx.state.commands,
            ContentAction.UPDATE_COMMANDS,
            "commands",
            ctx
        );
    }

    function handleDeleteCommandValue(keyID: number) {
        deleteValueInHashmap(
            keyID,
            ctx.state.commands,
            ContentAction.UPDATE_COMMANDS,
            "commands",
            ctx
        );
    }

    function handleUpdateFlags(keyID: number, newName: string) {
        updateHashMap(
            keyID,
            newName,
            ctx.state.gameFlags,
            ContentAction.UPDATE_GAME_FLAGS,
            "gameFlags",
            ctx
        );
    }

    function handleDeleteFlagValue(keyID: number) {
        deleteValueInHashmap(
            keyID,
            ctx.state.gameFlags,
            ContentAction.UPDATE_GAME_FLAGS,
            "gameFlags",
            ctx
        );
    }

    return (
        <Flex direction={"row"}>
            <Flex direction={"column"}>
                <ContentNavigationComponent
                    title="Rooms"
                    contents={ctx.state.rooms.map((room) => room.content)}
                    onPressButton={handleChangeCurrRoom}
                    onAdd={handleAddRoom}
                />
                <ContentNavigationComponent
                    title="Objects"
                    contents={ctx.state.objects}
                    onPressButton={handleChangeCurrRoom}
                    onAdd={handleAddRoom}
                />
            </Flex>
            <Flex direction={"column"}>
                <ContentComponent
                    content={ctx.state.currRoom.content}
                    onUpdateContent={handleUpdateRoomContent}
                />
                <ButtonReactionComponent
                    roomData={ctx.state.currRoom}
                    selectOptions={ctx.state.roomNames}
                />
                <TextCommandsComponent roomData={ctx.state.currRoom} />
            </Flex>
            <Flex direction={"column"}>
                <ListHashMapComponent
                    hashmap={ctx.state.commands}
                    title="Commands"
                    onUpdateHashMap={handleUpdateCommands}
                    onRemoveHashMap={handleDeleteCommandValue}
                />
                <ListHashMapComponent
                    hashmap={ctx.state.gameFlags}
                    title="Flags"
                    onUpdateHashMap={handleUpdateFlags}
                    onRemoveHashMap={handleDeleteFlagValue}
                />
            </Flex>
        </Flex>
    );
};
