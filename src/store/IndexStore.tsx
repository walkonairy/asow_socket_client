import {action, observable} from "mobx";

class IndexStore {
    @observable
    name: string = "asow";

    @action
    public setName(name: string): void {
        this.name = name;
    }
}

export default IndexStore;