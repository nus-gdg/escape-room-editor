import { Condition, ConditionId } from "../../../state/data/data";

export enum ConditionActionTypes {
    INIT,
    ADD_NEW_CONDITION,
    DELETE,
    MODIFY,
}

export interface ConditionState {
    conditions: Record<ConditionId, Condition>;
    conditionNames: Record<ConditionId, string>;
    mainCondition?: Condition;
}

export interface ConditionAction {
    type: ConditionActionTypes;
    payload: {
        conditionID?: number;
        initialCondition?: Condition;
        newCondition?: Condition;
    };
}

const ConditionReducer = (state: ConditionState, action: ConditionAction) => {
    const { type, payload } = action;
    switch (type) {
        case ConditionActionTypes.INIT:
            return initConditions(payload.initialCondition) || state;
        case ConditionActionTypes.ADD_NEW_CONDITION:
            break;
        case ConditionActionTypes.DELETE:
            break;
        case ConditionActionTypes.MODIFY:
            break;
        default:
            return state;
    }

    return state;
};

const initConditions = (
    mainCondition: Condition | undefined
): ConditionState | undefined => {
    if (mainCondition === undefined) {
        console.warn("Initing main condition but it is undefined");
        return;
    }

    const conditions: Record<ConditionId, Condition> = {};
    const conditionNames: Record<ConditionId, string> = {};

    //slowly look through the mainCondition and put into a stack
    //then stack pop the stack and initialise into conditions and conditionNames

    return { conditions, conditionNames, mainCondition };
};

const addCondition = (state: ConditionState) => {
    //just add on
};

const deleteCondition = (state: ConditionState, conditionID: ConditionId) => {
    //get from the state
    //dont delete make it undefined
    //children who sees it will also notice its undefined
};

export default ConditionReducer;
