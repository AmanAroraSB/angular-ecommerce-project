import { ResourceModel } from "./Generic-resource-model";
import { Item } from "./Item";

export class Orders extends ResourceModel<Orders>{
    public Name!: string;
    public OrderID!: number;
    public UserId!: number;
    public food_list!: Item[];
    public CreatedOn!:Date;
    public Sum!: number;
    public TransactionId!: string;

}