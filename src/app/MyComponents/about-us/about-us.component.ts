import { Component } from '@angular/core';
import { LoginserviceService } from 'src/app/Service/loginservice.service';
import { SignupserviceService } from 'src/app/Service/signupservice.service';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent {
constructor(private loginservice:LoginserviceService,private signupservice:SignupserviceService){
  loginservice.Visible=true;
  signupservice.Visible=true;
}
}
