import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'

import { LoginserviceService } from 'src/app/Shared/Services/loginservice.service';
import { SignupserviceService } from 'src/app/Shared/Services/signupservice.service';
import alertifyjs from 'alertifyjs'
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
//import 'jspdf-autotable/dist/jspdf.plugin.autotable.css';
import { Item } from 'src/app/core/Model/Item';
import { state } from '@angular/animations';
import { ProductsService } from '../admin/Services/products.service';

import { Orders } from 'src/app/core/Model/orders';
import { Router } from '@angular/router';
import { BillingDetails } from 'src/app/core/Model/BillingDetails';
import { SessionResponse } from 'src/app/core/Model/SessionResponse';
@Component({
  selector: 'app-billing-details',
  templateUrl: './billing-details.component.html',
  styleUrls: ['./billing-details.component.css']
})
export class BillingDetailsComponent {
  order: object = { name: "", userid: 0 };
  address: any;
  constructor(private loginservice: LoginserviceService, private signupservice: SignupserviceService, private orderservice: ProductsService, private route: Router) {
    loginservice.Visible = true;
    signupservice.Visible = true;

  }
  billingdetails = new FormGroup({
    firstname: new FormControl('', [Validators.required]),
    Lastname: new FormControl('', [Validators.required]),
    Gender: new FormControl('', [Validators.required]),

    Email: new FormControl('', [Validators.required, Validators.email]),
    phone: new FormControl('', [Validators.required, Validators.pattern("^((\\+91-?) |0)?[0-9]{10}$")]),

  });

  billdetailssubmit() {
    if (!this.address) {
      alertifyjs.set('notifier', 'position', 'top-right');
      alertifyjs.error("Please Select An Address");
    } else {


      // const json = localStorage.getItem('key');
      // const parsed: Item[] = json ? JSON.parse(json) : [];

      // const doc = new jsPDF();
      // const invoiceTitle = 'Invoice';
      // const date = new Date().toLocaleDateString();

      // const header = [['Item', 'Quantity', 'Unit Price', 'Total Price']];
      // const rows = parsed.map(item => [item.Name, item.Quantity, "$" + item.Price.toFixed(2), "$" + (item.Price * item.Quantity).toFixed(2)]);

      // const sum = parsed.reduce((acc, item) => acc + item.Price * item.Quantity, 0);
      // const footer = [[{ content: 'Total Bill', colSpan: 3 }, '', '$' + sum.toFixed(2)]];

      // doc.setFontSize(18);
      // doc.text(invoiceTitle, 10, 10);
      // doc.setFontSize(12);
      // doc.text(`Date: ${date}`, 10, 18);
      // // doc.setFont("")
      // doc.text(['Name:' + this.firstname?.value + ' ' + this.Lastname?.value, 'Country:' + this.country?.value,], 60, 10)
      // doc.text(['State:' + this.State?.value, 'City:' + this.City?.value], 150, 10)
      // doc.text(['Address:' + this.Address?.value, "Pincode:" + this.Zip?.value], 20, 40)
      // doc.text(["email:" + this.Email?.value, "Phone no:" + this.phone?.value], 100, 40)
      // autoTable(doc, {
      //   head: header,
      //   body: rows,
      //   startY: 50,
      //   theme: 'grid', // Use 'grid' theme for table styling
      // });

      // autoTable(doc, {
      //   body: footer,

      //   theme: 'grid', // Use 'grid' theme for footer styling
      // });
      

      //   // doc.save('invoice.pdf');

      var id = localStorage.getItem("logged_in");
      if (id != null)
        var parsedid = JSON.parse(id).id;
      var item = localStorage.getItem("key");
      if (item != null)
        var parseditem = JSON.parse(item);
      var foodsum = 0;
      parseditem.forEach((element: any) => {
        foodsum += element.quantity * element.price
      });

      var object = {
        Name: `${this.firstname?.value} ${this.Lastname?.value}`,
        userid: parsedid, food_list: parseditem, sum: foodsum
      }
      var
        billingdetails = {
          Id: 0,
          Name: this.firstname?.value ?? "" + this.Lastname?.value ?? "",
          Gender: this.Gender?.value ?? "",
          Country: this.address.Country,
          State: this.address.State,
          City: this.address.City,
          StreetAddress: this.address.StreetAddress,
          ZipCode: `${this.address.ZipCode}`,
          PhoneNumber: `${this.phone?.value}`,
          Email: this.Email?.value ?? "",


        }
      var foodandbill;
      foodandbill = { FoodList: parseditem, BillingDetails: billingdetails }
      this.orderservice.MakePayment(foodandbill).subscribe((result) => {
        var Payment: SessionResponse = result;
        // alertifyjs.set('notifier', 'position', 'top-right');
        // alertifyjs.success('Your Order Have Been Placed');
        console.log(result);

        localStorage.setItem("BillingDetails", JSON.stringify(Payment.BillingDetailsId));
        window.location.href = (Payment.Url);
      })


    }
  }

  get firstname() {
    return this.billingdetails.get('firstname');

  }
  get Lastname() {
    return this.billingdetails.get('Lastname');
  }
  get Gender() {
    return this.billingdetails.get('Gender');
  }
  get Email() {
    return this.billingdetails.get('Email');
  }
  get phone() {
    return this.billingdetails.get('phone');
  }

  onAddressSelected(a: any) {
    this.address = a;
    console.log(a);


  }
}
