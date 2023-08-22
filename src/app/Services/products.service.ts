import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http:HttpClient) { 

  }
getdata(){
  let url="https://localhost:7231/api/Home"

  
  return this.http.get(url); 
}
}
