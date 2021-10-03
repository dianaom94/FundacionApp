import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FundacionBuscarComponent } from './fundacion-buscar/fundacion-buscar.component';
import { FundacionResultadosComponent } from './fundacion-resultados/fundacion-resultados.component';
import { FormsModule } from '@angular/forms';
import { NegritaPipe } from '../pipes/negrita.pipe';
import { Error404Component } from './error404/error404.component';
import { FundacionVerMasComponent } from './fundacion-ver-mas/fundacion-ver-mas.component';
import { RouterModule } from '@angular/router';
RouterModule


@NgModule({
  declarations: [
    NegritaPipe,
    FundacionBuscarComponent,
    FundacionResultadosComponent,
    Error404Component,
    FundacionVerMasComponent,
    
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  exports:[
    NegritaPipe,
    FundacionBuscarComponent,
    FundacionResultadosComponent,
    Error404Component,
    FundacionVerMasComponent
  ]
})
export class ComponentsModule { }
