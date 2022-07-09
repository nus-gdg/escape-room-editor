import { ChevronRightIcon } from "@chakra-ui/icons";
import { Button, Menu, MenuItem, MenuList, Portal } from "@chakra-ui/react";
import { forwardRef } from "react";

interface Props {
    isMenuOpen: boolean;
    openMenuCallback: () => void;
    closeMenuCallback: () => void;
    id: string;
}

const ConditionSubMenu = forwardRef((props: Props, ref: any) => {
    return (
        <Menu
            isOpen={props.isMenuOpen}
            onClose={() => props.closeMenuCallback()}
        >
            <Button
                ref={ref}
                {...props}
                rightIcon={<ChevronRightIcon />}
                onKeyDown={(event) => {
                    if (event.key === "ArrowRight") {
                        props.openMenuCallback();
                    }
                }}
                onMouseEnter={() => {
                    props.openMenuCallback();
                }}
                variant="ghost"
                id={props.id}
            >
                Conditions
            </Button>
            <Portal>
                <MenuList
                    onKeyDown={(event) => {
                        if (event.key === "ArrowLeft") {
                            props.closeMenuCallback();
                        }
                    }}
                >
                    <MenuItem>R1</MenuItem>
                    <MenuItem>R2</MenuItem>
                    <MenuItem>R3</MenuItem>
                </MenuList>
            </Portal>
        </Menu>
    );
});

export default ConditionSubMenu;
