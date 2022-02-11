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
import { ListHashMapComponent } from "./components/ListHashMapComponent";
import {
    deleteValueInHashmap,
    updateCurrRoom,
    updateHashMap,
} from "./GeneralHelperFuncs";

export const GeneralPage = () => {
    const ctx = useRoot();

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
            <RoomsNavigationComponent />
            <Flex direction={"column"}>
                <ContentComponent
                    content={ctx.state.currRoom.content}
                    onUpdateContent={handleUpdateRoomContent}
                />
                <ButtonReactionComponent
                    roomData={ctx.state.currRoom}
                    selectOptions={ctx.state.roomNames}
                />
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
