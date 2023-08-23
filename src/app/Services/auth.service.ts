import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  url="https://localhost:7231/api/Account/";
  constructor(private http:HttpClient) { }
CreateUser(data:object){
  console.log(data);
  
    return this.http.post(this.url+"CreateUser",data,{responseType: 'text'});
  }
}
