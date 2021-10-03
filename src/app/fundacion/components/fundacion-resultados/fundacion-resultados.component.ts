import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-fundacion-resultados',
  templateUrl: './fundacion-resultados.component.html',
  styleUrls: ['./fundacion-resultados.component.scss']
})


export class FundacionResultadosComponent implements OnInit {
  ver: boolean = true;
  @Input () nombresPerros: string = '';
  @Input () imagenPerros: string = '';
  @Input () razaPerros: string = '';

  
  constructor() { }

  ngOnInit(): void {
    
  }

 

}
