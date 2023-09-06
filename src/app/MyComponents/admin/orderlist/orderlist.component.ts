import { Component } from '@angular/core';

import { Orders } from 'src/app/core/Model/orders';
import { ProductsService } from '../Services/products.service';

@Component({
  selector: 'app-orderlist',
  templateUrl: './orderlist.component.html',
  styleUrls: ['./orderlist.component.css']
})
export class OrderlistComponent {
  orders: Orders[] = [];
  constructor(private orderservice: ProductsService) {
    this.orderservice.getdataOrders().subscribe((result) => {
      console.log(result);
      this.orders = result as Orders[];
    })
    console.log(this.orders);

  }
}
