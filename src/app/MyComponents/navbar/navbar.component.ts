import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../Shared/Services/auth.service'
import { BehaviorSubject, Observable } from 'rxjs';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router'
import * as alertifyjs from 'alertifyjs';

import { LoginserviceService } from 'src/app/Shared/Services/loginservice.service';
import { SignupserviceService } from 'src/app/Shared/Services/signupservice.service';
import { User } from 'src/app/core/Model/User';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  showlogin: boolean = true;

  constructor(private authervice: AuthService, private route: Router, public loginservice: LoginserviceService, public signupservice: SignupserviceService, private activatedroute: ActivatedRoute) {

  }

  loggedinuser: any
  isLoggedIn$: any
  user: User = {
    Id: 0, UserName: '', Role: '', Token: '', toJson() {

    },
  };
  username: string = '';
  ngOnInit(): void {
    this.isLoggedIn$ = this.authervice.isloggendin();



  }
  logggedIn() {
    const storedData = localStorage.getItem("logged_in");

    if (storedData) {

      try {
        this.loggedinuser = JSON.parse(storedData) as User;
        this.user = JSON.parse(storedData) as User;
      } catch (error) {

      }
      this.username = this.user.UserName;



      return this.loggedinuser
    }
  }
  showlogedin() {
    return this.route.events.subscribe((val) => {
      if (val instanceof NavigationEnd) {

        if (val.url == "/" || val.url == "/Login" || val.url == "/Home") {

          return this.showlogin = false;



        } else {

          return this.showlogin = true;

        }
      }
      return true
    })
  }
  logout() {
    this.authervice.logoutuser();
    alertifyjs.set('notifier', 'position', 'top-right');
    alertifyjs.success("logout succefully")
    this.route.navigateByUrl("");
    localStorage.removeItem("key")


  }
  onlogin() {


    if (this.route.url == "/" || this.route.url == "/Login") {
      return false
    } else {
      return true
    }
  }
  onsignup() {

  }
  isadmin() {
    var role = this.authervice.role();
    if (role) {
      return role
    } else {
      return false;
    }
  }
  isaboutus() {
    // console.log(this.activatedroute);
    return "true";
  }
}
