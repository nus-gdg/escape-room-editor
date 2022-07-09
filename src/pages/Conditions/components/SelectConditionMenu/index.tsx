import { ChevronDownIcon } from "@chakra-ui/icons";
import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import ConditionSubMenu from "./ConditionSubMenu";
import { MenuTypes } from "./Constants";

const SelectConditionMenu = () => {
    const [currMenuOpened, setCurrMenuOpened] = useState<MenuTypes>(
        MenuTypes.NONE
    );

    const [optionToFocus, setOptionToFocus] = useState<MenuTypes>(
        MenuTypes.NONE
    );

    useEffect(() => {
        console.log(currMenuOpened);
        // document.getElementById(optionToFocus)?.focus();
    }, [currMenuOpened]);

    return (
        <Menu>
            <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                Actions
            </MenuButton>
            <MenuList>
                <MenuItem>Flag</MenuItem>
                <MenuItem
                    as={ConditionSubMenu}
                    isMenuOpen={currMenuOpened === MenuTypes.CONDITIONS}
                    openMenuCallback={() =>
                        setCurrMenuOpened(MenuTypes.CONDITIONS)
                    }
                    closeMenuCallback={() => {
                        setCurrMenuOpened(MenuTypes.NONE);
                        setOptionToFocus(MenuTypes.CONDITIONS);
                    }}
                    id={MenuTypes.CONDITIONS}
                />
                <MenuItem>Item</MenuItem>
                <MenuItem>Number</MenuItem>
            </MenuList>
        </Menu>
    );
};

export default SelectConditionMenu;
