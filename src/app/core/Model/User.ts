import { ResourceModel } from "./Generic-resource-model";

export class User extends ResourceModel<User>{
    public UserName!: string;
    public Role!: string;
    public Id !: number
    public Token!:string;
    constructor(model?: Partial<User>) {
        super(model);
    }
}