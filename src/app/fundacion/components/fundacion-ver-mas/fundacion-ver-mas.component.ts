import { Component, OnInit, OnDestroy, Input } from '@angular/core';

@Component({
  selector: 'app-fundacion-ver-mas',
  templateUrl: './fundacion-ver-mas.component.html',
  styleUrls: ['./fundacion-ver-mas.component.scss']
})
export class FundacionVerMasComponent implements OnInit, OnDestroy {
  @Input() raza: string = ''
  constructor() { }
  edad:number = 0
  estado:Array<string>=[
    "Alta",
    "Media",
    "Baja"
  ]
  rango: number= 0
  ngOnInit(): void {
    this.edad = Math.floor(Math.random()*(15-1))+1;
    this.rango = Math.floor(Math.random()*(3-1))+1;
    
  }
  ngOnDestroy(): void{
    console.log('ngOnDestroy');
    
  }

}
