import { Component } from '@angular/core';
import {FormGroup,FormControl,Validators } from '@angular/forms'
@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent {

login=new FormGroup({
  Username:new FormControl('',[Validators.required])
,password:new FormControl('',[Validators.required,])
});
userlogin(){
  console.log(this.login.value);
  
}
get Username(){
return this.login.get("Username");
}
get password(){
  return this.login.get("password");
}
}

