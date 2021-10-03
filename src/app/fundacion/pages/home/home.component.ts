import { Component, Renderer2, ElementRef, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { PerrosService } from '../../service/perros.service';
import { APIDogs } from '../../service/interfaces/perros.interface';
import { NombresService } from '../../service/nombres.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  @ViewChild("raza") btnRaza!: ElementRef;
  @ViewChild("todos") btnTodos!: ElementRef;
  seleccion :string = 'todos'
  perros: any 
  subscription!: Subscription
  constructor(private perrosService: PerrosService, private nombresService: NombresService,private rendered:Renderer2) { }

  ngOnInit(): void {
    this.subscription= this.perrosService.getAllBreeds().subscribe ((respuesta:any) =>{
      this.perros = respuesta
      let cantidad = respuesta.length
      let names = this.nombresService.getNombres (cantidad) //igualar cantidad de nombres y perros
      
      
      respuesta.forEach((p:any,index:number) => {
        p.nombre= names[index];
      
      });
        
      
  
    })

    
    setTimeout(()=>{ console.log(this.perros);}, 3000);

    
  }


  ngOnDestroy(): void {
    this.subscription.unsubscribe();
    
  }

  cambiarSeleccion(seleccionado:string){
    
     
    
    if(seleccionado=="todos"){
      document.getElementById("raza")?.classList.remove("active")
      document.getElementById("todos")?.classList.add("active")
      
    }
    if (seleccionado=="raza") {
      document.getElementById("todos")?.classList.remove("active")
      document.getElementById("raza")?.classList.add("active")
    }
    
    this.seleccion= seleccionado;
  }

  
}
