import { Component } from '@angular/core';
import {FormGroup,FormControl, Validators} from '@angular/forms'

import { LoginserviceService } from 'src/app/Service/loginservice.service';
import { SignupserviceService } from 'src/app/Service/signupservice.service';
import  jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
//import 'jspdf-autotable/dist/jspdf.plugin.autotable.css';
import { Item } from 'src/app/Item';
import { state } from '@angular/animations';
@Component({
  selector: 'app-billing-details',
  templateUrl: './billing-details.component.html',
  styleUrls: ['./billing-details.component.css']
})
export class BillingDetailsComponent {
  constructor(private loginservice:LoginserviceService,private signupservice:SignupserviceService){
    loginservice.Visible=true;
    signupservice.Visible=true;
  }
billingdetails=new FormGroup({
firstname:new FormControl('',[Validators.required]),
Lastname:new FormControl('',[Validators.required]),
Gender:new FormControl('',[Validators.required]),
country:new FormControl('',[Validators.required]),
State:new FormControl('',[Validators.required]),
City:new FormControl('',[Validators.required]),
Address:new FormControl('',[Validators.required]),
Email:new FormControl('',[Validators.required,Validators.email]),
phone:new FormControl('',[Validators.required,Validators. pattern("^((\\+91-?) |0)?[0-9]{10}$")]),
Zip:new FormControl('',[Validators.required,Validators.pattern('[0-9]{5}')])

});
billdetailssubmit(){
 // console.log(this.billingdetails);
  console.log(this.billingdetails.value);
  const json = localStorage.getItem('key');
  const parsed: Item[] = json ? JSON.parse(json) : [];

  const doc = new jsPDF();
  const invoiceTitle = 'Invoice';
  const date = new Date().toLocaleDateString();

  const header = [['Item', 'Quantity', 'Unit Price', 'Total Price']];
  const rows = parsed.map(item => [item.name, item.quantity, "$"+item.price.toFixed(2),"$"+ (item.price * item.quantity).toFixed(2)]);
  
  const sum = parsed.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const footer = [[{ content: 'Total Bill', colSpan: 3 }, '$', sum.toFixed(2)]];

  doc.setFontSize(18);
  doc.text(invoiceTitle, 10, 10);
  doc.setFontSize(12);
  doc.text(`Date: ${date}`, 10, 18);
  doc.setFont("")
  doc.text(['Name:'+this.firstname?.value+' '+this.Lastname?.value,'Country:'+this.country?.value,],60,10)
  doc.text(['State:'+this.State?.value,'City:'+this.City?.value],150,10)
  doc.text(['Address:'+this.Address?.value,"Pincode:"+this.Zip?.value],20,40)
  doc.text(["email:"+this.Email?.value,"Phone no:"+this.phone?.value],100,40)
  autoTable(doc,{
    head: header,
    body: rows,
    startY: 50,
    theme: 'grid', // Use 'grid' theme for table styling
  });

  autoTable(doc,{
    body: footer,
    
    theme: 'grid', // Use 'grid' theme for footer styling
  });

  doc.save('invoice.pdf');
}

get firstname(){
  return this.billingdetails.get('firstname');
  
}
get Lastname(){
  return this.billingdetails.get('Lastname');
}
get Gender(){
  return this.billingdetails.get('Gender');
}
get country(){
  return this.billingdetails.get('country');
}
get State(){
  return this.billingdetails.get('State');
}
get City(){
  return this.billingdetails.get('City');
}
get Address(){
  return this.billingdetails.get('Address');
}
get Email(){
  return this.billingdetails.get('Email');
}
get phone(){
  return this.billingdetails.get('phone');
}
get Zip(){
  return this.billingdetails.get('Zip');
}
}
