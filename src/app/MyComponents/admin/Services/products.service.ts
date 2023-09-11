import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Item } from '../../../core/Model/Item';
import { ResourceService } from '../../../core/Services/resource-service';
import { ApiService } from 'src/app/core/Services/api.service';
import { environment } from 'src/app/environments/environment';
import { Orders } from 'src/app/core/Model/orders';
@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  url: string = environment.server_url;



  constructor(private apiservice: ApiService, private http: HttpClient) { }
  getdataItem(): Observable<any> {

 

    return this.apiservice.get(`${this.url}Home/Getdata`);
  }
  getdataItembyid(id: number) {
    return this.apiservice.get(`${this.url}Home/GetById/${id}`);
  }


  AddProductItem(item: Item
  ) {
    return this.apiservice.post(`${this.url}Home/AddProduct`, item)
  }
  EditProductItem(item:Item){
    return this.apiservice.post(`${this.url}Home/EditProduct`,item)
  }
  DeleteItem(id: number) {
    return this.apiservice.delete(`${this.url}Home/Delete/${id}`)
  }
  uploadimagesItem(formData: FormData) {
    return this.http.post(`${this.url}Home/upload`, formData,);
  }
  getdataOrders() {
    return this.apiservice.get(`${this.url}Orders/Get`);
  }
  AdddataOrders(order: any) {
    return this.apiservice.post(`${this.url}Orders/Add`, order)
  }
  getorderbyorderid(order_id:number){
    return this.apiservice.get(`${this.url}Orders/Getbyorderid/${order_id}`)
  }
  getorderbyuserid(userid:number){
    return this.apiservice.get(`${this.url}Orders/Getbyuserid/${userid}`)
  }
  MakePayment(food:any){
    return this.apiservice.post(`${this.url}Payment/Payment`,food)
  }
}