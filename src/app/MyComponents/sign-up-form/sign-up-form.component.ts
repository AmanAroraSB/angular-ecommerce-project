import { Component  } from '@angular/core';
import {AuthService} from '../../Services/auth.service'
import{AbstractControl, FormControl,FormGroup,ValidationErrors,Validator, ValidatorFn, Validators}from '@angular/forms';
import * as alertifyjs from 'alertifyjs';
import { LoginserviceService } from 'src/app/Service/loginservice.service';
import { SignupserviceService } from 'src/app/Service/signupservice.service';
@Component({
  selector: 'app-sign-up-form',
  templateUrl: './sign-up-form.component.html',
  styleUrls: ['./sign-up-form.component.css']
})

export class SignUpFormComponent {
  constructor(private Authservice:AuthService,private loginservice:LoginserviceService,private signupservice:SignupserviceService){
    loginservice.Visible=true;
    signupservice.Visible=false;
  }
  
signup:FormGroup=new FormGroup({
  Username:new FormControl('',[Validators.required]),
  password:new FormControl('',[Validators.required]),
  confirm:new FormControl('',[Validators.required]),
  


}, { validators: [confirmPasswordValidator]});

usersignup(){
  console.log(this.signup.value);
  this.Authservice.CreateUser({UserName:this.Username?.value,Password:this.password?.value,}).subscribe((result)=>{
    alertifyjs.set('notifier','position', 'top-right');
    alertifyjs.success(result);  
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