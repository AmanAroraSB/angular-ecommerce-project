import { ResourceModel } from "./Generic-resource-model";

export class User extends ResourceModel<User>{
    public userName!: string;
    public role!: string;
    public override id !: number

    constructor(model?: Partial<User>) {
        super(model);
    }
}