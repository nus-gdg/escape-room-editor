import {ReactElement} from "react";
import {HandleProps, NodeProps} from "reactflow";
import {FormControl, InputLabel, NativeSelect,} from "@mui/material";
import {CustomNode} from "../flow";
import {TextBox} from "../forms";
import {ReactionOptionData} from "./ReactionOptionData";
import "./ReactionOptionNode.css";

export function makeReactionOptionNode(title: string, ...handles: ReactElement<HandleProps>[]) {
    return ({data}: NodeProps<ReactionOptionData>) => {
        return (
            <CustomNode title={title} handles={handles}>
                <FormControl fullWidth>
                    <InputLabel variant="standard" htmlFor="select">Type</InputLabel>
                    <NativeSelect
                        sx={{width: "100%", color: "#FFFFFF"}}
                        // value={undefined}
                        id={"select"}
                        className="nodrag"
                    >
                        <option value={"text"}>Text</option>
                        <option value={"reaction"}>Reaction</option>
                    </NativeSelect>
                </FormControl>
                <TextBox label={"Emoji"} id={"emoji"} />
                <TextBox label={"Summary"} id={"summary"} />
                <TextBox label={"Condition"} id={"condition"} />
                <TextBox label={"Modifiers"} id={"modifiers"} />
            </CustomNode>
        );
    }
}
