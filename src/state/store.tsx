import Data from "./data/data";
import Editor from "./editor/editor";

export default class Store {
    data: Data = new Data();
    editor: Editor = new Editor();
}
