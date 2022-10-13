import {uuid} from "../constants";
import {Entity} from "../entity";

export interface PassageData {
    id: uuid,
    parent: Entity,
}
