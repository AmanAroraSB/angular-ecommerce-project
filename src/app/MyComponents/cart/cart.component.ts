import { Component, Input } from '@angular/core';
import { Item } from 'src/app/core/Model/Item';
import { ProductsService } from '../admin/Services/products.service';
// import { obejct } from 'src/app/core/Model/object';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  constructor(private apiservice: ProductsService) { }
  @Input() items: Item[] = [];
  @Input() totalsum: number = 0;
  ngOnInit(): void {
    if (this.items.length === 0) {
      const item = localStorage.getItem("key");
      if (item !== null) {
        try {
          this.items = JSON.parse(item);
          this.items.forEach(element => {
            this.totalsum += element.Price * element.Quantity;
          });
        } catch (error) {
          //console.error("Error parsing data from local storage:", error);
        }
      }
    }

  }


  deleteItem(item: Item) {
    this.totalsum = 0;
    var cartitems = localStorage.getItem("key");
    if (cartitems != null) {
      // console.log(typeof cartitems);
      let quantity = false;

      let index: number | undefined = undefined;;
      let parsed: Item[] = JSON.parse(cartitems);
      parsed.forEach((element: Item) => {
        //console.log(element.name)
        if (element.Name == item.Name) {
          element.Quantity -= 1;
          if (element.Quantity < 1) {

            quantity = true;
            index = parsed.indexOf(element)
          }

        }
        this.totalsum += element.Price * element.Quantity;
      });
      if (quantity == false) {
        localStorage.setItem("key", JSON.stringify(parsed))
        this.items = parsed;
      } else if (quantity == true) {
        if (index != null) {

          parsed.splice(index, 1)
        }
        localStorage.setItem("key", JSON.stringify(parsed))
        this.items = parsed
      }
    }

  }
  pay(items: Item[]) {
    this.apiservice.MakePayment(items).subscribe(res => {
      console.log(res);
      window.location.href = (res);

    })
  }
}
