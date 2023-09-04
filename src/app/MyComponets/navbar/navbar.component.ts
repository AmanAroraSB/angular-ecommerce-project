import { Component, OnInit } from '@angular/core';
import {AuthService} from'../../Services/auth.service'
import { BehaviorSubject, Observable } from 'rxjs';
import {NavigationEnd, Router} from '@angular/router'
import * as alertifyjs from 'alertifyjs';
import { LoginserviceService } from 'src/app/Service/loginservice.service';
import { SignupserviceService } from 'src/app/Service/signupservice.service';
import { User } from 'src/app/User';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{
showlogin:boolean=true;
 
constructor(private authervice:AuthService,private route:Router,public loginservice:LoginserviceService,public signupservice:SignupserviceService){
 
}

loggedinuser:any
 isLoggedIn$:any
 user:User={id:1,userName:'',role:''}
 username:string='';
ngOnInit(): void {
  this.isLoggedIn$=this.authervice.isloggendin();
  console.log(this.isLoggedIn$);
 
  
}
logggedIn(){
  const storedData = localStorage.getItem("logged_in");
  
  if (storedData) {
 
    try {
      this.loggedinuser = JSON.parse(storedData) as User;
      this.user=JSON.parse(storedData) as User;
    } catch (error) {
      console.error("Error parsing JSON:", error);
    }
    this.username=this.user.userName;

    
  
  return this.loggedinuser
  }
}
showlogedin(){
 return this.route.events.subscribe((val)=>{
    if(val instanceof NavigationEnd){
      console.log(val.url);
      if(val.url=="/" || val.url=="/Login" || val.url=="/Home"){
        console.log("inside");
        
       return this.showlogin=false;
  
        
        
      }else{
        console.log("out");
       return this.showlogin=true;
        
      }
    }
    return true
  })
}
logout(){
  this.authervice.logoutuser();
  alertifyjs.set('notifier','position', 'top-right');
  alertifyjs.success("logout succefully")
this.route.navigateByUrl("");
localStorage.removeItem("key")
  console.log("logout");
 
}
onlogin(){
  console.log(this.route.url);
  
if(this.route.url=="/"||this.route.url=="/Login"){
  return false
}else{
  return true
}
}
onsignup(){

}
isadmin(){
 var role=this.authervice.role();
 if(role){
  return role
 }else{
  return false;
 }
}
}
