import { Component } from '@angular/core';
import { LoginserviceService } from '../Service/loginservice.service';
import { SignupserviceService } from '../Service/signupservice.service';

@Component({
  selector: 'app-pagenotfound',
  templateUrl: './pagenotfound.component.html',
  styleUrls: ['./pagenotfound.component.css']
})
export class PagenotfoundComponent {
  constructor(private loginservice:LoginserviceService,private signupservice:SignupserviceService){
    loginservice.Visible=true;
    signupservice.Visible=true;
  }
}
