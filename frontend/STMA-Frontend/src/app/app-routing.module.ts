import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:"/login",
    pathMatch:"full"
  },
  {
    path:"login",
    component:LoginComponent,
  },
  {
    path:"Intern",
    loadChildren:()=>import('./intern/intern.module').then(m=>m.InternModule)
  },
  {
    path:"FTE",
    loadChildren:()=>import('./fte/fte.module').then(m=>m.FteModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
