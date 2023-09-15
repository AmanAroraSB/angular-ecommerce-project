import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemsComponent } from './MyComponents/items/items.component';
import { CartComponent } from './MyComponents/cart/cart.component';
import { PagenotfoundComponent } from './MyComponents/pagenotfound/pagenotfound.component';
import { BillingDetailsComponent } from './MyComponents/billing-details/billing-details.component';
import { SignUpFormComponent } from './MyComponents/sign-up-form/sign-up-form.component';
import { LoginFormComponent } from './MyComponents/login-form/login-form.component';
import { authguardGuard } from './Shared/guard/authguard.guard';
import { ItemSingleComponent } from './MyComponents/item-single/item-single.component';
import { AboutUsComponent } from './MyComponents/about-us/about-us.component';
import { AddproductComponent } from './MyComponents/admin/addproduct/addproduct.component';
import { logGuard } from './Shared/guard/log.guard';
import { AdminComponent } from './MyComponents/admin/admin.component';
import { ListingComponent } from './MyComponents/admin/listing/listing.component';
import { EditComponent } from './MyComponents/admin/edit/edit.component';
import { UserlistingComponent } from './MyComponents/admin/userlisting/userlisting.component';
import { roleguardGuard } from './Shared/guard/roleguard.guard';
import { UserEditComponent } from './MyComponents/admin/user-edit/user-edit.component';
import { OrderlistComponent } from './MyComponents/admin/orderlist/orderlist.component';
import { OrderlistbyuserComponent } from './MyComponents/orderlistbyuser/orderlistbyuser.component';
import { OrderdetailsComponent } from './MyComponents/orderdetails/orderdetails.component';
import { SuccessComponent } from './MyComponents/success/success.component';
import { SomethingWentWrongComponent } from './MyComponents/something-went-wrong/something-went-wrong.component';
import { AddAddressComponent } from './MyComponents/add-address/add-address.component';


const routes: Routes = [
  { path: ``, component: LoginFormComponent, canActivate: [logGuard] }, {
    path: "cart", component: CartComponent, canActivate: [authguardGuard]
  },
  {
    path: "Home", component: ItemsComponent, canActivate: [authguardGuard]
  }, {
    path: "Home/:id", component: ItemSingleComponent
  }
  , {
    path: "success", component: SuccessComponent, pathMatch: 'full', canActivate: [authguardGuard]
  },
  {
    path: "bill", component: BillingDetailsComponent, canActivate: [authguardGuard]
  }, {
    path: "AddAddress", component: AddAddressComponent, canActivate: [authguardGuard]
  },
  {
    path: "Singup", component: SignUpFormComponent
  }, {
    path: "Something", component: SomethingWentWrongComponent
  },
  {
    path: "Login", component: LoginFormComponent, canActivate: []
  }, {
    path: "orderdetails/:id", component: OrderdetailsComponent, canActivate: [logGuard]
  }, {
    path: "Aboutus", component: AboutUsComponent
  }

  , {
    path: "orders", component: OrderlistbyuserComponent, canActivate: [logGuard]
  }, {
    path: "Admin", component: AdminComponent, children: [{
      path: "add", component: AddproductComponent
    }, {
      path: "list", component: ListingComponent
    }, {
      path: "Edit/:id", component: EditComponent
    }, { path: "UserEdit/:id", component: UserEditComponent }, {

      path: "userlist", component: UserlistingComponent
    }, {
      path: "orders", component: OrderlistComponent
    }, { path: "orderdetails/:id", component: OrderdetailsComponent }, {
      path: "**", component: ListingComponent
    },], canActivate: [authguardGuard, roleguardGuard]
  }
  , {
    path: "**", component: PagenotfoundComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
