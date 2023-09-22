import { Component, EventEmitter, Output } from '@angular/core';
import { ProductsService } from '../admin/Services/products.service';
import { ApiService } from 'src/app/core/Services/api.service';
import { Address } from 'src/app/core/Model/Address';

@Component({
  selector: 'app-addresses',
  templateUrl: './addresses.component.html',
  styleUrls: ['./addresses.component.css']
})
export class AddressesComponent {
  addresses: Address[] = [];
  selectedaddress: any;
  @Output() addressSelected =new EventEmitter<any>();
  selectedAddressIndex: any;
  constructor(private apiservice: ProductsService) {
    var user = localStorage.getItem("logged_in");
    if (user)
      var userparse = JSON.parse(user);
    this.apiservice.GetAddressByUserid(userparse.Id).subscribe(res => {
      console.log(res);
      this.addresses = res

    }, err => {
      console.log(err);

    })
  }


  Addressvalue() {


    // this.selectedaddress = address;
    console.log(this.selectedaddress);

  }
  onAddressSelect(index: number) {
    this.selectedAddressIndex = index;
    this.addressSelected.emit(this.addresses[index]);

    // this.addressService.setSelectedAddress(this.addressData[index]);
  }
}
