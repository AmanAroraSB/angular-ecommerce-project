import { Component } from '@angular/core';
import { Orders } from 'src/app/core/Model/orders';
import { ProductsService } from '../admin/Services/products.service';
import { Item } from 'src/app/core/Model/Item';
import { ActivatedRoute, Route, Router } from '@angular/router';
@Component({
  selector: 'app-orderdetails',
  templateUrl: './orderdetails.component.html',
  styleUrls: ['./orderdetails.component.css']
})
export class OrderdetailsComponent {
  id: string | null = this.route.snapshot.paramMap.get('id');
  serarchValue: any = '';
  currentPage: number = 1;
  orders: Item[] = [];
  totalsum: number = 0;
  constructor(private orderservice: ProductsService,private route:ActivatedRoute) {
  
    this.orderservice.getorderbyorderid(this.id as unknown as number).subscribe((result) => {
      console.log(result);
      this.orders = result as Item[];
      this.orders.forEach(el => {
        this.totalsum += el.price * el.quantity;
      })
    })
    console.log(this.orders);

  }
  View(arg0: number) {
    throw new Error('Method not implemented.');
  }
}
