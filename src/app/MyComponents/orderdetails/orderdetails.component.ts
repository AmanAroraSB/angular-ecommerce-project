import { Component } from '@angular/core';
import { Orders } from 'src/app/core/Model/orders';
import { ProductsService } from '../admin/Services/products.service';

import { ActivatedRoute, Route, Router } from '@angular/router';
import { OrderItems } from 'src/app/core/Model/OrderItem';
@Component({
  selector: 'app-orderdetails',
  templateUrl: './orderdetails.component.html',
  styleUrls: ['./orderdetails.component.css']
})
export class OrderdetailsComponent {
  id: string | null = this.route.snapshot.paramMap.get('id');
  serarchValue: any = '';
  currentPage: number = 1;
  orders: OrderItems[]=[];
  totalsum: number = 0;
  constructor(private orderservice: ProductsService, private route: ActivatedRoute) {

    this.orderservice.getorderbyorderid(this.id as unknown as number).subscribe((result) => {
      console.log(result);

      this.orders = (result);

    })


  }
  View(arg0: number) {
    throw new Error('Method not implemented.');
  }
}
