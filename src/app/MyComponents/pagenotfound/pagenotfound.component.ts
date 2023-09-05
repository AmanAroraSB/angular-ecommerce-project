import { Component } from '@angular/core';
import { LoginserviceService } from '../../Services/loginservice.service';
import { SignupserviceService } from '../../Services/signupservice.service';

@Component({
  selector: 'app-pagenotfound',
  templateUrl: './pagenotfound.component.html',
  styleUrls: ['./pagenotfound.component.css']
})
export class PagenotfoundComponent {
  constructor(private loginservice: LoginserviceService, private signupservice: SignupserviceService) {
    loginservice.Visible = true;
    signupservice.Visible = true;
  }
}
