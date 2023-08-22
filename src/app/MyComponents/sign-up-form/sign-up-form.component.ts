import { Component } from '@angular/core';
import{FormControl,FormGroup,Validator}from '@angular/forms'
@Component({
  selector: 'app-sign-up-form',
  templateUrl: './sign-up-form.component.html',
  styleUrls: ['./sign-up-form.component.css']
})
export class SignUpFormComponent {
signup=new FormGroup({
  Username:new FormControl(''),
  password:new FormControl(''),
  confirm:new FormControl('')
  


});
usersignup(){
  console.log(this.signup.value);
  
}
}
