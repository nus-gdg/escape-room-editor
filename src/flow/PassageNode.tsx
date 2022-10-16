import {memo} from "react";
import {Handle, Position} from "reactflow";
import {TextBox} from "../forms";
import {Button} from "@mui/material";
import {CustomNode, CustomNodeActions, CustomNodeDetails, CustomNodeHeader, NodeType} from "./utils";
import "./PassageNode.css";

const PassageNode = () => {
    return (
        <CustomNode>
            <CustomNodeHeader className="node-passage__header">
                <strong>Passage</strong>
                <Handle type="target" position={Position.Left} id={NodeType.Passage}/>
                <Handle type="source" position={Position.Right} id={NodeType.TextOption}/>
                <Handle type="source" position={Position.Right} id={NodeType.ReactionOption}/>
            </CustomNodeHeader>
            <CustomNodeDetails className="node-passage__body">
                <TextBox label={"Text"} id={"text"} />
                <TextBox label={"Images"} id={"images"} />
                <TextBox label={"Condition"} id={"condition"} />
                <TextBox label={"Modifiers"} id={"modifiers"} />
            </CustomNodeDetails>
            <CustomNodeActions className="option-node__footer">
                <Button>Save</Button>
                <Button>Cancel</Button>
            </CustomNodeActions>
        </CustomNode>
    );
}

export default memo(PassageNode);