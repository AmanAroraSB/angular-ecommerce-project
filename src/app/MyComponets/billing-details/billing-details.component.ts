import { Component } from '@angular/core';
import {FormGroup,FormControl, Validators} from '@angular/forms'

@Component({
  selector: 'app-billing-details',
  templateUrl: './billing-details.component.html',
  styleUrls: ['./billing-details.component.css']
})
export class BillingDetailsComponent {
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
  alert("All Form details have been saved");
  
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
