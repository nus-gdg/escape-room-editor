import Data, {testData} from "./data/data";
import Editor from "./editor/editor";

export default class Store {
    data: Data = testData;
    editor: Editor = new Editor();
}
