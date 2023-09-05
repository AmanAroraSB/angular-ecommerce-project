import { Component } from '@angular/core';
import { OrderService } from 'src/app/Services/order.service';
import { Orders } from 'src/app/core/Model/orders';

@Component({
  selector: 'app-orderlist',
  templateUrl: './orderlist.component.html',
  styleUrls: ['./orderlist.component.css']
})
export class OrderlistComponent {
  orders: Orders[] = [];
  constructor(private orderservice: OrderService) {
    this.orderservice.getallorders().subscribe((result) => {
      console.log(result);
      this.orders = result as Orders[];
    })
    console.log(this.orders);
    
  }
}
