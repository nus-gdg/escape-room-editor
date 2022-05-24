import { Select } from "@chakra-ui/react";
import { ChangeEvent } from "react";
import { useRoot } from "../../../hooks/useRoot";

interface Props {
    hashmap: { [key: number]: string };
    currValue: number;
    placeholder?: string;
    onSelected: (event: ChangeEvent<HTMLSelectElement>) => void;
}

export const HashMapToSelectComponent = (props: Props) => {
    const ctx = useRoot();

    return (
        <Select
            placeholder={props.placeholder ?? "--Choose--"}
            size="xs"
            errorBorderColor="tomato"
            value={props.currValue}
            onChange={(event) => props.onSelected(event)}
        >
            {Object.keys(props.hashmap).map((mapKey, index) => {
                return (
                    <option value={mapKey} key={index}>
                        {props.hashmap[Number(mapKey)]}
                    </option>
                );
            })}
        </Select>
    );
};
