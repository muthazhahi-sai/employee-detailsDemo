import { NgModule } from '@angular/core';
import { FormArrayName } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { DepatmentComponent } from './depatment/depatment.component';
import { EmployeeComponent } from './employee/employee.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [

  {
    path:'employee',
    component:EmployeeComponent,
    
  },
  {
    path:'department',
    component:DepatmentComponent,
    
  },
  {
    path:'',
    component:LoginComponent,
    
  },
   {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
