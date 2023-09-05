import { HttpClient } from '@angular/common/http';
import { Token } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { User } from '../core/Model/User';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  url = "https://localhost:7231/api/Account/";
  constructor(private http: HttpClient) { }
  CreateUser(data: object) {
    console.log(data);

    return this.http.post(this.url + "CreateUser", data, { responseType: 'text' });
  }
  loginuser(data: object) {
    console.log(data);
    return this.http.post(this.url + "Login", data, { responseType: 'text' });

  }
  deleteuser(id: number) {
    return this.http.delete(this.url + `Delete/${id}`, { responseType: 'text' });
  }
  getalluser() {
    return this.http.post(this.url + "GetUser", null);
  }
  logoutuser() {
    localStorage.removeItem("logged_in");
  }
  settoken(token: string) {
    localStorage.setItem("logged_in", token);
  }
  isloggendin() {
    var local = localStorage.getItem("logged_in");
    if (local != null) {

      var user = JSON.parse(local);
    }
    if (user) {

      return user;
    } else {
      return false;
    }
  }
  role() {
    var user = localStorage.getItem("logged_in");
    if (user != null) {
      var logged_inuser: User = JSON.parse(user);
      if (logged_inuser.role == "Admin") {

        return logged_inuser

      } else {
        return false
      }
    } else {
      return false;
    }
  }
  getuserbyid(id: string) {
    return this.http.post(this.url + `GetUserById/${id}`, null)
  }
}
