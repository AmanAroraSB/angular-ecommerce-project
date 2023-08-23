import { Component  } from '@angular/core';
import {AuthService} from '../../Services/auth.service'
import{AbstractControl, FormControl,FormGroup,ValidationErrors,Validator, ValidatorFn, Validators}from '@angular/forms';
@Component({
  selector: 'app-sign-up-form',
  templateUrl: './sign-up-form.component.html',
  styleUrls: ['./sign-up-form.component.css']
})

export class SignUpFormComponent {
  constructor(private Authservice:AuthService){

  }
  
signup:FormGroup=new FormGroup({
  Username:new FormControl('',[Validators.required]),
  password:new FormControl('',[Validators.required]),
  confirm:new FormControl('',[Validators.required]),
  


}, { validators: [confirmPasswordValidator]});

usersignup(){
  console.log(this.signup.value);
  this.Authservice.CreateUser({UserName:this.Username?.value,Password:this.password?.value}).subscribe((result)=>{
alert(result)
    
  })
  
  
}
get Username(){
  return this.signup.get("Username");
}
get password(){
  return this.signup.get("password");
}
get confirm(){
  return this.signup.get("confirm");
}
}
export const confirmPasswordValidator: ValidatorFn = (
  control: AbstractControl
): ValidationErrors | null => {
  return control.value.confirm === control.value.password
    ? null
    : { PasswordNoMatch: true };

    
};