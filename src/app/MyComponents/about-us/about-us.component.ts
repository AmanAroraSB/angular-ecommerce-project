import { Component } from '@angular/core';
import { LoginserviceService } from 'src/app/Shared/Services/loginservice.service';
import { SignupserviceService } from 'src/app/Shared/Services/signupservice.service';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent {
  constructor(private loginservice: LoginserviceService, private signupservice: SignupserviceService) {
    loginservice.Visible = true;
    signupservice.Visible = true;
  }
}
