import { Button, Flex, Input, Select } from "@chakra-ui/react";
import { ChangeEvent } from "react";
import { useRoot } from "../../../../hooks/useRoot";
import { TextCommandData } from "../../Data/RoomData";
import { HashMapToSelectComponent } from "../HashMapToSelectComponent";

interface Props {
    modifyFlags: {
        flagKey: number;
        flagState: boolean;
    }[];
    onUpdateFlagList: (
        updatedFlags: {
            flagKey: number;
            flagState: boolean;
        }[]
    ) => void;
}

export const ModifyFlagsCmdComponent = (props: Props) => {
    const ctx = useRoot();

    function handleUpdateFlagChoice(
        event: ChangeEvent<HTMLSelectElement>,
        flagIndex: number
    ) {
        let updatedFlag = {
            ...props.modifyFlags[flagIndex],
            flagKey: Number(event.target.value),
        };

        updateFlagList(updatedFlag, flagIndex);
    }

    function handleUpdateFlagState(
        event: ChangeEvent<HTMLSelectElement>,
        flagIndex: number
    ) {
        let updatedFlag = {
            ...props.modifyFlags[flagIndex],
            flagState: Boolean(+event.target.value), //convert to number than boolean
        };

        updateFlagList(updatedFlag, flagIndex);
    }

    function updateFlagList(
        updatedFlag: { flagKey: number; flagState: boolean },
        flagIndex: number
    ) {
        let updatedFlagList = [...props.modifyFlags];

        updatedFlagList[flagIndex] = updatedFlag;
        props.onUpdateFlagList(updatedFlagList);
    }

    function handleAddFlagOption() {
        let updatedFlagList = [...props.modifyFlags];

        updatedFlagList.push(TextCommandData.getDefaultFlagData());
        props.onUpdateFlagList(updatedFlagList);
    }

    function handleDelFlagOption(flagIndex: number) {
        let updatedFlagList = [...props.modifyFlags];

        updatedFlagList.splice(flagIndex, 1);
        props.onUpdateFlagList(updatedFlagList);
    }

    return (
        <Flex direction="column">
            <Button onClick={() => handleAddFlagOption()}>Add Flag</Button>
            {/* <Button onClick={}>Add Flag</Button> */}
            {props.modifyFlags.map((flag, flagIndex) => {
                return (
                    <Flex direction="row">
                        {
                            <HashMapToSelectComponent
                                hashmap={ctx.state.gameFlags}
                                currValue={flag.flagKey}
                                onSelected={(event) =>
                                    handleUpdateFlagChoice(event, flagIndex)
                                }
                            />
                        }

                        {/* select to set the flag to be true or false */}
                        <Select
                            defaultValue={0}
                            size="xs"
                            errorBorderColor="tomato"
                            value={Number(flag.flagState)}
                            onChange={(event) =>
                                handleUpdateFlagState(event, flagIndex)
                            }
                        >
                            <option value={0} key={flagIndex}>
                                False
                            </option>
                            <option value={1} key={flagIndex}>
                                True
                            </option>
                        </Select>
                        <Button onClick={() => handleDelFlagOption(flagIndex)}>
                            -
                        </Button>
                    </Flex>
                );
            })}
        </Flex>
    );
};
