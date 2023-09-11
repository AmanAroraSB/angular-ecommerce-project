import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../../Shared/Services/auth.service';
import { Router } from '@angular/router';
import * as alertifyjs from 'alertifyjs';
import { LoginserviceService } from '../../Shared/Services/loginservice.service';
import { SignupserviceService } from '../../Shared/Services/signupservice.service';
@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})

export class LoginFormComponent implements OnInit {
  constructor(private Authservice: AuthService, private router: Router, private loginservice: LoginserviceService, private signupservice: SignupserviceService) {
    if (Authservice.isloggendin()) {
      router.navigateByUrl("")
    }
    signupservice.Visible = true;
  }
  ngOnInit(): void {
    this.loginservice.hide();
    console.log("hidden");

  }


  login = new FormGroup({
    Username: new FormControl('', [Validators.required])
    , password: new FormControl('', [Validators.required,])
  });
  userlogin() {
    this.Authservice.loginuser({ UserName: this.Username?.value, Password: this.password?.value }).subscribe(result => {
      if (result == "false") {
    
        // alertifyjs.set('notifier','position', 'top-center');
        alertifyjs.set('notifier', 'position', 'top-right');
        alertifyjs.error('Username or Password is incorrect')

      } else if (result) {
        this.Authservice.settoken(result);
        alertifyjs.set('notifier', 'position', 'top-right');
        alertifyjs.success('Login Successful');
        this.router.navigateByUrl("Home")
      } else {
        alertifyjs.set('notifier', 'position', 'top-right');
        alertifyjs.error('Something Went wrong')
      }

    })

  }
  get Username() {
    return this.login.get("Username");
  }
  get password() {
    return this.login.get("password");
  }
}

