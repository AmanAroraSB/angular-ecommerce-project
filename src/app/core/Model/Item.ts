import { ResourceModel } from "./Generic-resource-model"

export class Item extends ResourceModel<Item>{
      public Id !: number
      public ImageUrl !: string[]
      public Name !: string
      public Type!: string
      public Price !: number
      public Quantity !: number
      public Description!: string
      constructor(model?: Partial<Item>) {
            super(model);
      }
}