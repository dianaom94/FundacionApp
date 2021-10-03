import { NgModule } from '@angular/core';
import { RouterModule, Routes, CanActivate, CanLoad } from '@angular/router';
import { Error404Component } from './fundacion/components/error404/error404.component';
import { LoginComponent } from './fundacion/pages/login/login.component';
import { ValidacionGuard } from './fundacion/shared/guard/validacion.guard';

const routes: Routes = [
  {
    path:'',
    component:LoginComponent,
    
   
  },
  {
    path:'home',
    loadChildren:()=>import("./fundacion/pages/pages.module").then(module => module.PagesModule),
    canActivate:[ValidacionGuard]

  },
  {
    path:'**',
    component: Error404Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
