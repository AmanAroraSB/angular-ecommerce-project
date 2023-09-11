import { Component } from '@angular/core';

import { Orders } from 'src/app/core/Model/orders';
import { ProductsService } from '../Services/products.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-orderlist',
  templateUrl: './orderlist.component.html',
  styleUrls: ['./orderlist.component.css']
})
export class OrderlistComponent {

  orders: Orders[] = [];
  constructor(private orderservice: ProductsService,private router:Router) {
    this.orderservice.getdataOrders().subscribe((result) => {

      this.orders = result as Orders[];
    })


  }
  View(arg0: number) {
    this.router.navigateByUrl(`/Admin/orderdetails/${arg0}`)
    }
}
