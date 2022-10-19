import React, {memo, useCallback, useState} from "react";

interface BaseDialogState<T> {
    type: string,
    open: boolean,
}

export interface AddDialogState<T> extends BaseDialogState<T> {
    type: "add",
}

export interface EditDialogState<T> extends BaseDialogState<T> {
    type: "edit",
    data?: T,
}

export interface DeleteDialogState<T> extends BaseDialogState<T> {
    type: "delete",
}

export type DialogState<T> =
    | AddDialogState<T>
    | EditDialogState<T>
    | DeleteDialogState<T>;
