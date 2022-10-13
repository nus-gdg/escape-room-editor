import {ItemData} from "./index";

export interface ItemProps {
    data: ItemData,
}

export const Item = ({data}: ItemProps) => {
    return (
        <div>
            {data.name}
        </div>
    )
}
