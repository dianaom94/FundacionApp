import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { PagesRoutingModule } from './pages-routing.module';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { SharedModule } from '../shared/shared.module';
import { ComponentsModule } from '../components/components.module';
import { environment } from '../../../environments/environment';
import { NovedadesComponent } from './novedades/novedades.component';


@NgModule({
  declarations: 
  [
    LoginComponent, 
    HomeComponent, 
    NovedadesComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    PagesRoutingModule,
    SharedModule,
    ComponentsModule

  ]
})
export class PagesModule { }
