import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemsComponent } from './MyComponets/items/items.component';
import { CartComponent } from './MyComponets/cart/cart.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { BillingDetailsComponent } from './MyComponets/billing-details/billing-details.component';
import { SignUpFormComponent } from './MyComponents/sign-up-form/sign-up-form.component';
import { LoginFormComponent } from './MyComponents/login-form/login-form.component';


const routes: Routes = [
{  path:``, component:ItemsComponent},{
  path:"cart",component:CartComponent
},
{
path:"bill",component:BillingDetailsComponent
},
{
  path:"Singup",component:SignUpFormComponent
},
{
  path:"Login",component:LoginFormComponent
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
