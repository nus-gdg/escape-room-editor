import React, {Dispatch, useCallback} from "react";
import {isEqual} from "lodash";
import {FolderPath, Symbols} from "../../../../../constants";
import {Entity} from "../../../../../state/data/data";

interface CategoryButtonsProps<T extends Entity> {
    onAddEntity: () => void,
}

function CategoryButtons<T extends Entity>(
    {
        onAddEntity,
    }: CategoryButtonsProps<T>) {
    console.log(`Rendered: CategoryButtons` );
    return (
        <>
            {/*<button disabled={true}>{Symbols.upArrow2}</button>,*/}
            {/*<button disabled={true}>{Symbols.downArrow2}</button>,*/}
            {/*<button disabled={true}>{Symbols.minus}</button>,*/}
            <button onClick={onAddEntity}>{Symbols.plus}</button>,
        </>
    );
}

export default React.memo(CategoryButtons, isEqual);
