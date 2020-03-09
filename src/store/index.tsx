import IndexStore from "./IndexStore";
import {RouterStore} from "mobx-react-router";

export default {
    RouterStore: new RouterStore(),
    indexStore: new IndexStore(),
}