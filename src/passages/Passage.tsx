import {PassageData} from "./index";

export interface PassageProps {
    data: PassageData,
}

export const Passage = ({data}: PassageProps) => {
    return (
        <div>
            {data.id}
        </div>
    )
}
