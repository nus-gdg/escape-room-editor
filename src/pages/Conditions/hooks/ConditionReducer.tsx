import { Condition, ConditionId } from "../../../state/data/data";

export enum ConditionActionTypes {
    INIT,
    ADD_NEW_CONDITION,
    DELETE,
    MODIFY,
}

export interface ConditionState {
    conditions: Record<ConditionId, Condition>;
    order: Array<ConditionId>;
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

    const queue: Array<Condition> = [];
    queue.unshift(mainCondition);

    const conditionOrder: Array<Condition> = []; //stack
    while (queue.length !== 0) {
        const currCondition: Condition | undefined = queue.shift();
        if (!currCondition) {
            continue;
        }

        if (currCondition.value instanceof Condition) {
            queue.unshift(currCondition.value);
        }

        if (currCondition.value2 instanceof Condition) {
            queue.unshift(currCondition.value2);
        }

        conditionOrder.push(currCondition);
    }

    //put in order
    const conditions: Record<ConditionId, Condition> = {};
    const order: Array<ConditionId> = [];
    for (let i = 0; i < conditionOrder.length; ++i) {
        const currCondition = conditionOrder.pop();
        if (currCondition === undefined) {
            continue;
        }

        conditions[currCondition.label] = currCondition;
        order.push(currCondition.label);
    }

    return { conditions, order, mainCondition };
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
