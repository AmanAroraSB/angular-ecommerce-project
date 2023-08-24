import { Component } from '@angular/core';
import {FormGroup,FormControl,Validators } from '@angular/forms'
import {AuthService} from '../../Services/auth.service'
import { Router } from '@angular/router';
@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent {
constructor(private Authservice:AuthService, private router:Router){}
login=new FormGroup({
  Username:new FormControl('',[Validators.required])
,password:new FormControl('',[Validators.required,])
});
userlogin(){
this.Authservice.loginuser({UserName:this.Username?.value,Password:this.password?.value}).subscribe(result=>{
 if(result=="true"){
  this.Authservice.settoken(result);
  this.router.navigateByUrl("Home")
 }else{
  alert("Username or Password is incorrect");
 }
  
})
  
}
get Username(){
return this.login.get("Username");
}
get password(){
  return this.login.get("password");
}
}

