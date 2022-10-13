import {Input} from "../forms";
import {RoomData} from "../rooms";

export interface RoomEditorProps {
    data: RoomData,
}

export const RoomEditor = ({data}: RoomEditorProps) => {
    const tabs = [
        {

        }
    ]
    return (
        <div>
            <Input heading={"TITLE"} placeholder={data.title}/>
            {/*<TabMenu tabs={}/>*/}
        </div>
    )
}
