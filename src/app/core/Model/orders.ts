import { BillingDetails } from "./BillingDetails";
import { ResourceModel } from "./Generic-resource-model";
import { Item } from "./Item";
import { User } from "./User";

export class Orders extends ResourceModel<Orders>{
    public Currency!: string;
    public Id!: number;
    public UserId!: number;
    public User!:User;
    public food_list!: Item[];
    public CreatedOn!:Date;
    public Total!: number;
    public TransactionId!: string;
    public BillingDetailsId!:number;
    public BillingDetails!:BillingDetails;

}