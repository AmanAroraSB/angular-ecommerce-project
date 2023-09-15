import { ResourceModel } from "./Generic-resource-model";
import { Item } from "./Item";
import { Orders } from "./orders";

export  class OrderItems extends ResourceModel<OrderItems>{
    public Id!:string;
    public OrderId!:number;
    public FoodId!:number;
    public Quantity!:number;
    public Price!:number;
    public Food!:Item;
    public Orders!:Orders
    

}