import { ResourceModel } from "./Generic-resource-model";
import { Item } from "./Item";

export class Orders extends ResourceModel<Orders>{
    public name!: string;
    public order_id!: number;
    public userid!: number;
    public food_list!: Item[];
    public sum!:number;

}