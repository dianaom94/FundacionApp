import { Component, OnInit, OnDestroy } from '@angular/core';
import { PerrosService } from '../../service/perros.service';
import { Observable } from 'rxjs';
import { NombresService } from '../../service/nombres.service';

@Component({
  selector: 'app-fundacion-buscar',
  templateUrl: './fundacion-buscar.component.html',
  styleUrls: ['./fundacion-buscar.component.scss']
})
export class FundacionBuscarComponent implements OnInit, OnDestroy {
  perros: any
  termino:any
  nombres:Array<string>=[]
  constructor(private perrosService: PerrosService, private nombresService: NombresService) { }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    
  }

  buscarPerros(evento:any){
    this.perrosService.searchBreed(evento)
      .subscribe((result:any)=>{
       
        result= result.filter((e:any)=>{return e.reference_image_id!==''})
        result= result.filter((e:any)=>{if(e.reference_image_id){
          return e;
        }})
        
        this.nombres = this.nombresService.getNombres(result.length)

        result.forEach((perro:any,index:any) => {
          this.perrosService.getimage(perro.reference_image_id)
          .subscribe((resp:any)=>{
            perro.url=resp.url
          })
          perro.nombre = this.nombres[index]
        });
      
        
        this.perros = result
      })

  }

}
