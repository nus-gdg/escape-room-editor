import React from "react";
import {FolderPath} from "../../../../../constants";
import Store from "../../../../../state/store";
import Action from "../../../../../state/~actions";

export interface MenuButtonResult {
    action: Action<Store>,
    path: FolderPath,
}

export function moveUp<T>(path: FolderPath, objects: T[]) {
    const result: MenuButtonResult = {
        action: new Action<Store>(),
        path: path,
    };
    const index = path.index();
    if (isNaN(index) || index <= 0) {
        return result;
    }
    const parentPath = path.close();
    const newIndex = index - 1;
    const newObjects = [
        ...objects.slice(0, newIndex),
        objects[index],
        objects[newIndex],
        ...objects.slice(index + 1),
    ];
    result.action.setEntry(parentPath.folders, newObjects);
    result.path = parentPath.open(newIndex);
    return result;
}

export function moveDown<T>(path: FolderPath, objects: T[]) {
    const result: MenuButtonResult = {
        action: new Action<Store>(),
        path: path,
    };
    const index = path.index();
    if (isNaN(index) || index >= objects.length - 1) {
        return result;
    }
    const parentPath = path.close();
    const newIndex = index + 1;
    const newObjects = [
        ...objects.slice(0, index),
        objects[newIndex],
        objects[index],
        ...objects.slice(newIndex + 1),
    ];
    result.action.setEntry(parentPath.folders, newObjects);
    result.path = parentPath.open(newIndex);
    return result;
}

export function add<T>(parentPath: FolderPath, objects: T[], factory: () => T) {
    const result: MenuButtonResult = {
        action: new Action<Store>(),
        path: parentPath,
    };
    const index = parentPath.index();
    if (!isNaN(index)) {
        return result;
    }
    const newObjects = objects.concat(factory());
    result.action.setEntry(parentPath.folders, newObjects);
    result.path = parentPath.open(objects.length);
    return result;
}

export function remove<T>(path: FolderPath, objects: T[]) {
    const result: MenuButtonResult = {
        action: new Action<Store>(),
        path: path,
    };
    const index = path.index();
    if (isNaN(index)) {
        return result;
    }
    const parentPath = path.close();
    const newObjects = [
        ...objects.slice(0, index),
        ...objects.slice(index + 1),
    ];
    result.action.setEntry(parentPath.folders, newObjects);
    result.path = parentPath;
    return result;
}
