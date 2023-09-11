import { Component } from '@angular/core';
import { Orders } from 'src/app/core/Model/orders';
import { ProductsService } from '../admin/Services/products.service';
import { Item } from 'src/app/core/Model/Item';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-orderlistbyuser',
  templateUrl: './orderlistbyuser.component.html',
  styleUrls: ['./orderlistbyuser.component.css']
})
export class OrderlistbyuserComponent {
  orders: Orders[] = [];
  constructor(private orderservice: ProductsService, private router: Router) {
    var json = localStorage.getItem('logged_in');
    if (json != null)
      var object = JSON.parse(json);
    var id = object.id;
    this.orderservice.getorderbyuserid(id).subscribe((result) => {
    
      this.orders = result as Orders[];
    })
  

  }
  View(arg0: number) {
    this.router.navigateByUrl(`orderdetails/${arg0}`)
  }
}


