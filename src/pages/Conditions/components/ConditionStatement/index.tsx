import { Flex } from "@chakra-ui/react";
import { useConditionsContext } from "../../hooks/ConditionContext";
import SelectConditionMenu from "../SelectConditionMenu";

const ConditionStatement = () => {
    const conditionContext = useConditionsContext();

    return (
        <Flex flexDirection="row">
            <SelectConditionMenu />
        </Flex>
    );
};

export default ConditionStatement;
