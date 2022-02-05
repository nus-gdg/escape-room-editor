import { Button, Flex, Text, Select, Input } from "@chakra-ui/react";
import React, { Component } from "react";
import { ButtonData } from "../Data/RoomData";

interface Props {
    buttonReactions: ButtonData[];
    onAddReaction: () => void;
    onDelReaction: (id: number) => void;
    onUpdateReaction?: Function;
}

interface State {}

class ButtonReactionComponent extends React.Component<Props, State> {
    constructor(props: Props | Readonly<Props>) {
        super(props);
    }

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
                    // onChange={}
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
