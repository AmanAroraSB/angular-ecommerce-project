import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Item } from '../Item';
@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  url="https://localhost:7231/api/Home/"
  constructor(private http:HttpClient) { 
  }
  getdata(): Observable<any>{
  

  
  return this.http.get<any>(this.url+"Getdata"); 
}
getdatabyid(id:number){
return this.http.post(this.url+"GetItem/"+id,"");
}
upload(formData: FormData) {
  return this.http.post(this.url + "upload", formData, );
}

AddProduct(item:Item
){
  return this.http.post(this.url+"AddProduct",item, { responseType: 'text' })
}
Delete(id:number){
return this.http.delete(this.url+`Delete/${id}`,{ responseType: 'text' })
}
}