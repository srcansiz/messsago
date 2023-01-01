
export abstract class BaseDB {

    public name: string;

    protected constructor(name: string) {
        this.name = name

    }

    abstract get_conversation(id: string): object;
    abstract remove_conversation(id: string): object;

}