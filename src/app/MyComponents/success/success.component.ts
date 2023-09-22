import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from '../admin/Services/products.service';
import { Orders } from 'src/app/core/Model/orders';
import { Item } from 'src/app/core/Model/Item';
import { User } from 'src/app/core/Model/User';
import alertify from 'alertifyjs'
import { OrderItems } from 'src/app/core/Model/OrderItem';
@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.css']
})
export class SuccessComponent {
  id: string | null = null;
  itemss: OrderItems[] = [];
  currentPage = 1;
  sum = 0;
  billingdetailsid: any;

  // // constructor(private route: ActivatedRoute, private apiservice: ProductsService, private router: Router) {
  // //   
  // //   console.log(this.id);
  // //   var user = localStorage.getItem("logged_in");
  // //   var item = localStorage.getItem("key");
  // //   var userparse: User;

  // //   var itemparse: Item[];
  // //   var sum = 0;

  // //   if (user != null && item != null) {
  // //     userparse = JSON.parse(user);
  // //     itemparse = JSON.parse(item);
  // //     itemparse.forEach(element => {
  // //       sum += element.price * element.quantity;
  // //     });
  // //     var order: Orders = {
  // //       name: userparse.userName, order_id: 0, userid: userparse.id, food_list: itemparse, sum: sum, toJson() {

  // //       },
  // //     }
  // //     this.apiservice.AdddataOrders(order).subscribe(result => {
  // //       localStorage.removeItem('key');
  // //       console.log(result);
  // //       this.apiservice.getorderdetailsbysessionid(this.id).subscribe(result => {
  // //         console.log(result);
  // //         this.itemss = result;
  // //         console.log(this.itemss);

  // //       })


  // //     }, error => {
  // //       if (error) {
  // //         this.router.navigateByUrl("/Something");
  // //       }
  // //     })
  // //   }
  // // }


  constructor(private apiservice: ProductsService, private route: ActivatedRoute) {
    this.route.queryParamMap.subscribe(param => {
      this.id = param.get('session_id');
    });
    var billdetails = localStorage.getItem('BillingDetails');
    if (billdetails)
      this.billingdetailsid = JSON.parse(billdetails);

    console.log(this.billingdetailsid);


    // console.log(this.id);

    var user = localStorage.getItem("logged_in");
    var item = localStorage.getItem("key");
    var userparse: User;

    var itemparse: Item[];
    var sum = 0;

    if (user != null && item != null) {
      userparse = JSON.parse(user);
      itemparse = JSON.parse(item);


      this.apiservice.addordersbysessionid(this.id as unknown as string, userparse.Id, this.billingdetailsid, itemparse).subscribe(result => {
        console.log(result);
        this.itemss = result;
        localStorage.removeItem('key');
        localStorage.removeItem("BillingDetails");

      }, err => {
        console.log(err);

      });


    }

  }

  // ngOnInit(): void {

  // }

}
