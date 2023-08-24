import { Component, OnInit } from '@angular/core';
import {AuthService} from'../../Services/auth.service'
import { BehaviorSubject, Observable } from 'rxjs';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{

 
constructor(private authervice:AuthService){
  
}
 isLoggedIn$:any
ngOnInit(): void {
  this.isLoggedIn$=this.authervice.isloggendin();
  console.log(this.isLoggedIn$);
  
}
}
