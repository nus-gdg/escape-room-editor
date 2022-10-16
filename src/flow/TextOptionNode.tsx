import {memo} from "react";
import {Handle, Position} from "reactflow";
import {TextBox} from "../forms";
import {Button, FormControl, InputLabel, NativeSelect,} from "@mui/material";
import {CustomNode, CustomNodeActions, CustomNodeDetails, CustomNodeHeader, NodeType} from "./utils";
import "./TextOptionNode.css";

const TextOptionNode = () => {
    return (
        <CustomNode>
            <CustomNodeHeader>
                <strong>Text Option</strong>
                <Handle type="target" position={Position.Left} id={NodeType.TextOption}/>
                <Handle type="source" position={Position.Right} id={NodeType.Passage}/>
            </CustomNodeHeader>
            <CustomNodeDetails className="node-text-option__body">
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
            </CustomNodeDetails>
            <CustomNodeActions className="node-text-option__footer">
                <Button>Save</Button>
                <Button>Cancel</Button>
            </CustomNodeActions>
        </CustomNode>
    );
}

export default memo(TextOptionNode);
