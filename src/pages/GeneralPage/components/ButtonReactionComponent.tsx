import { Button, Flex, Text, Select, Input } from "@chakra-ui/react";
import React, { ChangeEvent, ChangeEventHandler, Component } from "react";
import { ButtonData } from "../Data/RoomData";

interface Props {
    buttonReactions: ButtonData[];
    onAddReaction: () => void;
    onDelReaction: (id: number) => void;
    onUpdateReaction: (
        index: number,
        updatedButtonReaction: ButtonData
    ) => void;
}

interface State {}

class ButtonReactionComponent extends React.Component<Props, State> {
    constructor(props: Props | Readonly<Props>) {
        super(props);
    }

    handleUpdateReaction = (
        event: ChangeEvent<HTMLInputElement>,
        varName: keyof ButtonData,
        index: number
    ) => {
        let updatedButton = this.props.buttonReactions[index];
        updatedButton[varName] = event.target.value as never;

        this.props.onUpdateReaction(index, updatedButton);
    };

    render() {
        return (
            <div>
                <Flex direction="row">
                    <Text>Button Reactions</Text>
                    <Button onClick={() => this.props.onAddReaction()}>
                        +
                    </Button>
                </Flex>

                <Flex direction="column" bg="gray">
                    {this.props.buttonReactions.map((button, index) => {
                        return this.renderButtonData(button, index);
                    })}
                </Flex>
            </div>
        );
    }

    renderButtonData(buttonData: ButtonData, index: number) {
        return (
            <Flex direction="row" key={index}>
                <Input
                    value={buttonData.buttonText}
                    placeholder="Button input"
                    size="xs"
                    onChange={(event) =>
                        this.handleUpdateReaction(event, "buttonText", index)
                    }
                />

                <Select placeholder="Select Destination" size="xs"></Select>
                <Button onClick={() => this.props.onDelReaction(buttonData.id)}>
                    -
                </Button>
            </Flex>
        );
    }
}

export default ButtonReactionComponent;
