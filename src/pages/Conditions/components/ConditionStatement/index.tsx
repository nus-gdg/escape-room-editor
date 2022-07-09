import { ChevronDownIcon, ChevronRightIcon } from "@chakra-ui/icons";
import {
    Box,
    Flex,
    Select,
    Text,
    Menu,
    MenuItem,
    MenuButton,
    Button,
    MenuList,
    Portal,
    useDisclosure,
} from "@chakra-ui/react";
import React, { forwardRef, useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";
import { Condition, ConditionId } from "../../../../state/data/data";
import { useConditionsContext } from "../../hooks/ConditionContext";
import SelectConditionMenu from "../SelectConditionMenu";

const ConditionStatement = () => {
    const conditionContext = useConditionsContext();
    //const { isOpen, onOpen, onClose } = useDisclosure();

    const renderConditionMenuItems = () => {
        return conditionContext?.order.map(
            (conditionLabel: ConditionId, index: number) => {
                <MenuItem value={conditionLabel}>{`R${index}`}</MenuItem>;
            }
        );
    };

    return (
        <Flex flexDirection="row">
            <SelectConditionMenu />
        </Flex>
    );
};

export default ConditionStatement;
