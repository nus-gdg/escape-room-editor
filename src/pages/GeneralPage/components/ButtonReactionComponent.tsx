import { Button, Flex, Text, Select } from "@chakra-ui/react";
import React, { Component } from "react";
import { ButtonData } from "../Data/RoomData";

interface Props {
    buttonReactions: ButtonData[];
    onAddCmd: Function;
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
                    <Button onClick={() => this.props.onAddCmd()}>+</Button>
                </Flex>

                <Flex direction="column" bg="gray">
                    {this.props.buttonReactions.map((button, index) => {
                        return <Text>{button.buttonText}</Text>;
                    })}
                </Flex>

                {/* <Select on></Select> */}
            </div>
        );
    }
}

export default ButtonReactionComponent;
