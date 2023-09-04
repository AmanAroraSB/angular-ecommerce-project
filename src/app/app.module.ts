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
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { SignUpFormComponent } from './MyComponents/sign-up-form/sign-up-form.component';
import { LoginFormComponent } from './MyComponents/login-form/login-form.component'
import { AuthService } from './Services/auth.service';
import { ItemSingleComponent } from './MyComponets/item-single/item-single.component';
import { AboutUsComponent } from './MyComponents/about-us/about-us.component'; 
import {NgxPaginationModule} from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { SearchfilterPipe } from './searchfilter.pipe';
import { ProductsService } from './Services/products.service';
import { AddproductComponent } from './MyComponents/addproduct/addproduct.component';
import jsPDF from 'jspdf';
import { AdminComponent } from './MyComponents/admin/admin.component';
import { ListingComponent } from './MyComponents/listing/listing.component';
import { EditComponent } from './MyComponents/edit/edit.component';
import { UserlistingComponent } from './MyComponents/userlisting/userlisting.component';
import { UsersearchfilterPipe } from './Services/usersearchfilter.pipe';
import { UserEditComponent } from './MyComponents/user-edit/user-edit.component';



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
    ItemSingleComponent,
    AboutUsComponent,
    SearchfilterPipe,
    AddproductComponent,
    AdminComponent,
    ListingComponent,
    EditComponent,
    UserlistingComponent,
    UsersearchfilterPipe,
    UserEditComponent,


    // AddtodoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,HttpClientModule
    ,ReactiveFormsModule,NgxPaginationModule,FormsModule,
  ],
  providers: [AuthService,ProductsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
