import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  url="https://localhost:7231/api/Orders/"
  constructor(private http:HttpClient) { }
  addorder(order:any){
    return this.http.post(this.url+"orders",order,{responseType:"text"})
    }
    getorderbyid(id:number){
    return this.http.post(this.url+`/${id}`,'');
    }
}
    

