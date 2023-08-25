import { HttpClient } from '@angular/common/http';
import { Token } from '@angular/compiler';
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
loginuser(data:object){
console.log(data);
return this.http.post(this.url+"Login",data,{responseType: 'text'});

}
logoutuser(){
  localStorage.removeItem("logged_in");
}
settoken(token:string){
localStorage.setItem("logged_in",token);
}
isloggendin(){
 var  user=localStorage.getItem("logged_in")
  if(user){

    return user;
  } else{
    return false;
  }
}
}
