import {Input, Tab, Tabs} from "../forms";
import {ItemData} from "../items";
import {PassageData} from "../passages";
import {useDispatch, useStore} from "../app";

export interface PassageEditorProps {
    data: ItemData,
    passages: PassageData[];
}

export const PassageEditor = ({data, passages}: PassageEditorProps) => {
    const store = useStore();
    const dispatch = useDispatch();

    const tabs: Tab[] = [
        {
            heading: "PASSAGES",
            renderContents: () => <button>LOL</button>
        },
    ];

    return (
        <div>
            <Input heading={"NAME"} placeholder={data.name}/>
            <Tabs tabs={tabs}/>
        </div>
    )
}
