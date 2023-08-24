import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  url="https://localhost:7231/api/"
  constructor(private http:HttpClient) { 
  }
  getdata(){
  

  
  return this.http.get(this.url+"Home"); 
}
getdatabyid(id:number){
return this.http.post(this.url+"GetItem",id);
}
}
