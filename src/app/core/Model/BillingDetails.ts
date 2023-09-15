import { ResourceModel } from "./Generic-resource-model";

export class BillingDetails extends ResourceModel<BillingDetails>{
    public Id!: number;
    public Name!: string;
    public Gender!: string;
    public Country!: string;
    public State!: string;
    public City!: string
    public StreetAddress!: string
    public ZipCode!: number;
    public PhoneNumber!: number;
    public Email!: string;
}