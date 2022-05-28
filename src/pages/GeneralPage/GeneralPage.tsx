import { Toolbar } from "../Toolbar/Toolbar";
import React, { Component, useState } from "react";
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
    updateCurrObject,
    updateCurrRoom,
    updateHashMap,
    updateObjInList,
    updateObjList,
    updateRoomInList,
    updateRoomList,
} from "./GeneralHelperFuncs";
import { TextCommandsComponent } from "./components/TextCommandComponent/TextCommandsComponent";

export const GeneralPage = () => {
    const ctx = useRoot();

    const [isRoomPage, setIsRoomPage] = useState(true);
    const [uniqueObjID, setUniqueObjID] = useState(ctx.state.objects.length);

    function handleChangeCurrRoom(nextRoomId: number) {
        //save obj if prev page was obj
        if (!isRoomPage) {
            updateObjInList(ctx.state.currObj, ctx);
        } else {
            //'save' currRoom data in the list
            updateRoomInList(ctx.state.currRoom, ctx);
        }

        let nextRoom = ctx.state.rooms.find((room) => room.id === nextRoomId);

        //if there is a next room, change the currRoom to next Room
        if (nextRoom) {
            updateCurrRoom(nextRoom, ctx);
        }

        setIsRoomPage(true);
    }

    function handleAddRoom() {
        let newRoom = new RoomData(ctx.state.rooms.length);
        updateRoomList(ctx.state.rooms.concat([newRoom]), ctx);

        //add name to hashmap
        updateHashMap(
            newRoom.id,
            newRoom.content.title,
            ctx.state.roomNames,
            ContentAction.UPDATE_ROOM_NAMES,
            "roomNames",
            ctx
        );
    }

    function handleRemoveRoom(roomId: number) {
        let updatedRoomList = [...ctx.state.rooms];
        let index = updatedRoomList.findIndex((room) => room.id === roomId);

        updatedRoomList.splice(index, 1);

        updateRoomList(updatedRoomList, ctx);
        deleteValueInHashmap(
            roomId,
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
        if (varName === "title") {
            updateHashMap(
                updatedRoom.id,
                updatedRoom.content.title,
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

    //---------------Object related things-------------
    function handleChangeCurrObject(nextObjID: number) {
        //save room if prev page was room
        if (isRoomPage) {
            updateRoomInList(ctx.state.currRoom, ctx);
        } else {
            //'save' currObj data in the list
            updateObjInList(ctx.state.currObj, ctx);
        }

        let nextObj = ctx.state.objects.find(
            (object) => object.id === nextObjID
        );

        //if there is a next obj, change the currObj to next obj
        if (nextObj) {
            updateCurrObject(nextObj, ctx);
        }

        setIsRoomPage(false);
    }

    function handleAddObject() {
        let newObj = new ContentData(uniqueObjID);
        updateObjList(ctx.state.objects.concat([newObj]), ctx);

        //add name to hashmap
        updateHashMap(
            newObj.id,
            newObj.title,
            ctx.state.objectNames,
            ContentAction.UPDATE_OBJECT_NAMES,
            "objectNames",
            ctx
        );

        setUniqueObjID(uniqueObjID + 1);
    }

    function handleDeleteObject(objectId: number) {
        let updatedObjList = [...ctx.state.objects];
        let index = updatedObjList.findIndex((obj) => obj.id === objectId);

        updatedObjList.splice(index, 1);

        updateObjList(updatedObjList, ctx);
        deleteValueInHashmap(
            objectId,
            ctx.state.objectNames,
            ContentAction.UPDATE_OBJECT_NAMES,
            "objectNames",
            ctx
        );
    }

    function handleUpdateObjectData(
        updatedContent: ContentData,
        varName: keyof ContentData
    ) {
        updateCurrObject(updatedContent, ctx);

        //if room name has been updated, update the unique value hashmap
        if (varName === "title") {
            updateHashMap(
                updatedContent.id,
                updatedContent.title,
                ctx.state.objectNames,
                ContentAction.UPDATE_OBJECT_NAMES,
                "objectNames",
                ctx
            );
        }
    }

    //-----------for rendering------------------
    function renderRoomData() {
        return (
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
        );
    }

    function renderObjectData() {
        return (
            <ContentComponent
                content={ctx.state.currObj}
                onUpdateContent={handleUpdateObjectData}
            />
        );
    }

    function renderContent() {
        if (isRoomPage) {
            return renderRoomData();
        }

        return renderObjectData();
    }

    return (
        <Flex direction={"row"} height={"100%"}>
            <Flex direction={"column"} width={"20%"}>
                <ContentNavigationComponent
                    title="Rooms"
                    contents={ctx.state.rooms.map((room) => room.content)}
                    onPressButton={handleChangeCurrRoom}
                    onAdd={handleAddRoom}
                    onRemove={handleRemoveRoom}
                />
                <ContentNavigationComponent
                    title="Objects"
                    contents={ctx.state.objects}
                    onPressButton={handleChangeCurrObject}
                    onAdd={handleAddObject}
                    onRemove={handleDeleteObject}
                />
            </Flex>
            {renderContent()}
            <Flex direction={"column"} width={"20%"}>
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
