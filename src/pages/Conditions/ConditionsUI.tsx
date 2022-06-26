import React from "react";
import { Box, Text } from "@chakra-ui/react";

import { Condition } from "../../state/data/data";
import { useConditionsContext } from "./hooks/ConditionContext";

export interface ConditionsUIProps {
    conditionTitle: string;
}

const ConditionsUI = (props: ConditionsUIProps) => {
    const conditionContext = useConditionsContext();

    return (
        <Box>
            <Text fontSize="6xl" color="black">
                {props.conditionTitle}
            </Text>
        </Box>
    );
};

export default React.memo(ConditionsUI);
