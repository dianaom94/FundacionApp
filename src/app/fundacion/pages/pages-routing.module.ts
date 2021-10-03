import { NgModule } from '@angular/core';
import { RouterModule, Routes, CanActivate } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { NovedadesComponent } from './novedades/novedades.component';
import { CanDeactivateGuard } from '../shared/guard/can-deactivate.guard';

const routes: Routes = [
  {
    path:'',
    component: HomeComponent,
    
    
    
  },
  {
    path:'novedades',
    component: NovedadesComponent,
    canDeactivate:[CanDeactivateGuard]
    
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
