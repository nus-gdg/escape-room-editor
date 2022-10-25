import {ReactElement} from "react";
import {HandleProps, NodeProps} from "reactflow";
import {CustomNode} from "../flow";
import {TextBox} from "../forms";
import {PassageData} from "./PassageData";
import "./PassageNode.css";

export function makePassageNode(title: string, ...handles: ReactElement<HandleProps>[]) {
    return ({data}: NodeProps<PassageData>) => {
        return (
            <CustomNode title={title} handles={handles}>
                <TextBox label={"Text"} id={"text"} />
                <TextBox label={"Images"} id={"images"} />
                <TextBox label={"Condition"} id={"condition"} />
                <TextBox label={"Modifiers"} id={"modifiers"} />
            </CustomNode>
        );
    }
}
