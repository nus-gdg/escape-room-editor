import {RoomData} from "./index";

export interface RoomProps {
    data: RoomData,
}

export const Room = ({data}: RoomProps) => {
    return (
        <div>
            {data.title}
        </div>
    )
}
