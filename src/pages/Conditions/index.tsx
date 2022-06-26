import { Box, Button, Flex, Text } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { Condition } from "../../state/data/data";

interface Props {
    conditionTitle: string;
    condition: Condition;
}

const Conditions = () => {
    //a map of conditions
    //key is the R1- Rsomething,
    //ordered map
    //need to expand out the conditions to a tree

    //components
    //- the title

    //the text itself, need to store its current condition and print out
    //this is a component by itself, need do the tabs and everything, if parent or children gets affected need print red

    //the final bottom bar to render out the entire statement

    //need use usecontext and usereducer
    //another hashmap with the names

    useEffect(() => {}, []);

    return <div>index</div>;
};

export default React.memo(Conditions);
