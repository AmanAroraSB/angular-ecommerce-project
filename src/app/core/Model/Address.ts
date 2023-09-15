import { ResourceModel } from "./Generic-resource-model";

export class Address extends ResourceModel<Address>{
    public Id!: number;
    public Country!: string;
    public State!: string;
    public City!: string;
    public ZipCode!: number;
    public StreetAddress!: string

}