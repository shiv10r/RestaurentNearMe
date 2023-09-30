import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { MaterialComponent } from './material/material.component';

const routes: Routes = [
  {path:'login', component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {path:'material',component:MaterialComponent},
  {path:'restaurent',component:MaterialComponent},
  {path:'',redirectTo:'login',pathMatch:'full'},
  {path:'**',redirectTo:'signup',pathMatch:'full'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
