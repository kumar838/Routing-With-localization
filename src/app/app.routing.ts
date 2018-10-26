
import {Routes,RouterModule} from "@angular/router";
import { AdminComponent } from "./admin/admin.component";
import { UserComponent } from "./user/user.component";
import { LoginComponent } from "./login/login.component";
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { LogoutComponent } from './logout/logout.component';

import {AuthGuardService} from './shared/guards/auth-guard.service';
import {CanDeactivateService} from './shared/guards/can-deactivate.service';

const approuting:Routes=[
   // {path:'',redirectTo:'login',pathMatch:'full'},
    {path:'',component:HomeComponent},
    {path:'login',component:LoginComponent,canDeactivate: [CanDeactivateService]},
    {path:'admin/:id',component:AdminComponent,canActivate:[AuthGuardService]},
    {path:'user',component:UserComponent,canActivate:[AuthGuardService]},
    {path:'logout',component:LogoutComponent},
    {path:'register',component:RegisterComponent},
    {path:'**', component:HomeComponent}
]

export const Routing=RouterModule.forRoot(approuting); 


//export const Routing=RouterModule.forRoot(approuting,{useHash:true}); // to use # in Url


//ASYNC WAIT:
//https://medium.com/@balramchavan/using-async-await-feature-in-angular-587dd56fdc77