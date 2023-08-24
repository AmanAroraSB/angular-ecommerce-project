import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './MyComponets/navbar/navbar.component';
import { ItemsComponent } from './MyComponets/items/items.component';
import { CartComponent } from './MyComponets/cart/cart.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

import { FooterComponent } from './MyComponets/footer/footer.component';
import {HttpClientModule} from '@angular/common/http';
import { BillingDetailsComponent } from './MyComponets/billing-details/billing-details.component';
import {ReactiveFormsModule} from '@angular/forms';
import { SignUpFormComponent } from './MyComponents/sign-up-form/sign-up-form.component';
import { LoginFormComponent } from './MyComponents/login-form/login-form.component'
import { AuthService } from './Services/auth.service';
import { ItemSingleComponent } from './MyComponets/item-single/item-single.component';
// import { AddtodoComponent } from './MyComponets/addtodo/addtodo.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ItemsComponent,
    CartComponent,
    PagenotfoundComponent,
    FooterComponent,
    BillingDetailsComponent,
    SignUpFormComponent,
    LoginFormComponent,
    ItemSingleComponent

    // AddtodoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,HttpClientModule
    ,ReactiveFormsModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
