import React, {ReactNode, useCallback, useContext, useMemo, useState} from "react";
import Data, {Flag, Item, Passage, ReactionOption, Room, TextOption} from "../../../state/data/data";
import "./Menu.css";
import Folder from "../../../common/components/Folder";
import Symbols from "../../../constants/Symbols";
import FolderPath from "../../../constants/FolderPath";

interface MenuProps {
    className?: string,
    data: Data,
}

const Menu = (
    {
        className = "",
        data = new Data(),
    }: MenuProps) => {
    console.log("Menu: Rendered");

    return (
        <div className={`menu ${className}`}>
            <div className={`toolbar`}>
                <div className={`toolbar-label`}>Menu</div>
                <button className={`toolbar-up toolbar-option`}>{Symbols.upArrow2}</button>
                <button className={`toolbar-down toolbar-option`}>{Symbols.downArrow2}</button>
                <button className={`toolbar-remove toolbar-option`}>{Symbols.minus}</button>
                <button className={`toolbar-add toolbar-option`}>{Symbols.plus}</button>
            </div>
            <div className={`menu-contents`}>
                <div className={`menu-folders`}>
                    <CategoryFolder
                        objects={data.rooms}
                        createSubfolder={createRoomFolder}
                        id={`rooms`}
                        title={"ROOMS"}/>
                    <CategoryFolder
                        objects={data.inventory}
                        createSubfolder={createItemFolder}
                        id={`inventory`}
                        title={"ITEMS"}/>
                    <CategoryFolder
                        objects={data.flags}
                        createSubfolder={createFlagFolder}
                        id={`flags`}
                        title={"FLAGS"}/>
                    <CategoryFolder
                        objects={data.globalTextOptions}
                        createSubfolder={createTextOptionFolder}
                        id={`globalTextOptions`}
                        title={"GLOBALS"}/>
                    <div className={"menu-contents-padding"}/>
                </div>
            </div>
        </div>
    );
};

export default React.memo(Menu);

interface CategoryFolderProps<T extends {id: string}> {
    objects: T[],
    createSubfolder: (props: SubfolderProps<T>) => React.ReactNode,
    id: string,
    path?: FolderPath,
    title?: string,
    icon?: string,
    selected?: boolean,
    onSelect?: () => void,
}

function CategoryFolder<T extends {id: string}>(
    {
        objects,
        createSubfolder,
        id,
        path = new FolderPath([`data`]),
        title = "TITLE",
        icon = Symbols.circle,
        selected = false,
        onSelect,
    }: CategoryFolderProps<T>) {
    const hasItems = objects && objects.length > 0;
    return (
        <Folder
            className={id}
            key={id}
            title={title}
            icon={icon}
            selected={selected}
            onSelect={onSelect}>
            {hasItems && objects.map((obj, index) => createSubfolder({obj: obj, depth: 1, path: path?.open(id, index),}))}
        </Folder>
    );// [`rooms`, index.toString()]
}

interface SubfolderProps<T extends {id: string}> {
    obj: T,
    depth?: number,
    path?: FolderPath,
    selected?: boolean,
    onSelect?: () => void;
}

function createItemFolder({obj, depth = 0, path, selected, onSelect,}: SubfolderProps<Item>) {
    return (
        <Folder className={`item`} key={obj.id} depth={depth} title={obj.id} selected={selected} onSelect={onSelect}>
            {createPassageFolder({obj: obj.passage, depth: depth + 1, path: path?.open(`passage`),})}
        </Folder>
    );
}

function createFlagFolder({obj, depth = 0, path, selected, onSelect,}: SubfolderProps<Flag>) {
    return (
        <Folder className={`flag`} key={obj.id} depth={depth} title={obj.id} selected={selected}/>
    );
}

function createTextOptionFolder({obj, depth = 0, path, selected, onSelect,}: SubfolderProps<TextOption>) {
    const hasPassages = obj.prepend.length > 0;
    return (
        <Folder className={`text-option`} key={`t~${obj.id}`} depth={depth} title={obj.id} selected={selected} onSelect={onSelect}>
            {hasPassages && obj.prepend.map(passage => createPassageFolder({obj: passage, depth: depth + 1,}))}
        </Folder>
    );
}

function createReactionOptionFolder({obj, depth = 0, path, selected, onSelect,}: SubfolderProps<ReactionOption>) {
    const hasPassages = obj.prepend.length > 0;
    return (
        <Folder className={`reaction-option`} key={`r~${obj.id}`} depth={depth} title={obj.id} selected={selected} onSelect={onSelect}>
            {hasPassages && obj.prepend.map(passage => createPassageFolder({obj: passage, depth: depth + 1,}))}
        </Folder>
    );
}

function createPassageFolder({obj, depth = 0, path, selected, onSelect,}: SubfolderProps<Passage>) {
    const hasReactionOptions = obj.reactionOptions.length > 0;
    const hasTextOptions = obj.textOptions.length > 0;
    return (
        <Folder className={`passage`} key={obj.id} depth={depth} title={obj.id} selected={selected} onSelect={onSelect}>
            {hasReactionOptions && obj.reactionOptions.map(option => createReactionOptionFolder({obj: option, depth: depth + 1,}))}
            {hasTextOptions && obj.textOptions.map(option => createTextOptionFolder({obj: option, depth: depth + 1,}))}
        </Folder>
    );
}

function createRoomFolder({obj, depth = 0, path, selected, onSelect,}: SubfolderProps<Room>) {
    const hasPassages = obj.passages.length > 0;
    return (
        <Folder className={`room`} key={obj.id} depth={depth} title={obj.id} selected={selected} onSelect={onSelect}>
            {hasPassages && obj.passages.map(passage => createPassageFolder({obj: passage, depth: depth + 1,}))}
        </Folder>
    );
}
