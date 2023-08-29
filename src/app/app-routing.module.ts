import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemsComponent } from './MyComponets/items/items.component';
import { CartComponent } from './MyComponets/cart/cart.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { BillingDetailsComponent } from './MyComponets/billing-details/billing-details.component';
import { SignUpFormComponent } from './MyComponents/sign-up-form/sign-up-form.component';
import { LoginFormComponent } from './MyComponents/login-form/login-form.component';
import { authguardGuard } from './Services/authguard.guard';
import { ItemSingleComponent } from './MyComponets/item-single/item-single.component';
import { AboutUsComponent } from './MyComponents/about-us/about-us.component';
import { AddproductComponent } from './MyComponents/addproduct/addproduct.component';
import { logGuard } from './Services/log.guard';


const routes: Routes = [
{  path:``, component:LoginFormComponent,canActivate:[logGuard]},{
  path:"cart",component:CartComponent,canActivate:[authguardGuard]
},
{
  path:"Home",component:ItemsComponent,canActivate:[authguardGuard]
},{
  path:"Home/:id", component:ItemSingleComponent
}
,
{
path:"bill",component:BillingDetailsComponent,canActivate:[authguardGuard]
},
{
  path:"Singup",component:SignUpFormComponent
},
{
  path:"Login",component:LoginFormComponent,canActivate:[logGuard]
},{
  path:"Aboutus",component:AboutUsComponent
},{
  path:"AddItem",component:AddproductComponent
}
,{
  path:"**",component:PagenotfoundComponent
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
