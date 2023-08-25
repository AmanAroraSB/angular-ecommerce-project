import { Component, OnInit } from '@angular/core';
import {AuthService} from'../../Services/auth.service'
import { BehaviorSubject, Observable } from 'rxjs';
import {Router} from '@angular/router'
import * as alertifyjs from 'alertifyjs';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{

 
constructor(private authervice:AuthService,private route:Router){
  
}
loggedinuser:any
 isLoggedIn$:any
ngOnInit(): void {
  this.isLoggedIn$=this.authervice.isloggendin();
  console.log(this.isLoggedIn$);
  
}
logggedIn(){
  this.loggedinuser=localStorage.getItem("logged_in");
  return this.loggedinuser
}

logout(){
  this.authervice.logoutuser();
  alertifyjs.set('notifier','position', 'top-right');
  alertifyjs.success("logout succefully")
this.route.navigateByUrl("");
  console.log("logout");
 
}
onlogin(){
// this.route.
}
onsignup(){

}
}
