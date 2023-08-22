import { Component } from '@angular/core';
import {FormGroup,FormControl,Validators } from '@angular/forms'
@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent {

login=new FormGroup({
  Username:new FormControl('')
,password:new FormControl('')
});
userlogin(){
  console.log(this.login.value);
  
}
}

