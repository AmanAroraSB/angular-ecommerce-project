import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
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

}
