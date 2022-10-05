import {Input} from "../forms";
import {RoomData} from "./index";

export interface RoomEditorProps {
    data: RoomData,
}

export const RoomEditor = ({data}: RoomEditorProps) => {
    return (
        <div>
            <Input heading={"TITLE"} placeholder={data.title}/>
        </div>
    )
}
