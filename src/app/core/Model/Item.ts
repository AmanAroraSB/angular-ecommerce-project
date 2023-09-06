import { ResourceModel } from "./Generic-resource-model"

export class Item extends ResourceModel<Item>{
      public override id !: number
      public imageUrl !: string[]
      public name !: string
      public type!: string
      public price !: number
      public quantity !: number
      public Description!: string
      constructor(model?: Partial<Item>) {
            super(model);
      }
}