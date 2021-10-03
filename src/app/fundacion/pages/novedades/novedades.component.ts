import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PuedeDesactivar } from '../../service/interfaces/puede-desactivar';
import Swal from 'sweetalert2';
import { FormGroup, FormControl, Validators, FormsModule, Form, FormBuilder } from '@angular/forms';

interface RegisterForm {
  nombre: string;
  email: string
}
@Component({
  selector: 'app-novedades',
  templateUrl: './novedades.component.html',
  styleUrls: ['./novedades.component.scss']
})
export class NovedadesComponent implements OnInit,  PuedeDesactivar  {
  public sendForm!: FormGroup;

  constructor( private formBuilder: FormBuilder) { 
    this.sendForm = this.formBuilder.group({
      nombre: ['', Validators.required,], 
      email: ['', Validators.compose([Validators.email, Validators.required])]
    })
    
  }

  

  ngOnInit(): void {
  
  }

  
  

  
  enviado = false;
  mensaje: string = '';
  nombre: string='';
  confirmar:boolean = false; 
  evento(evento:any){
    this.mensaje= evento.target.value
    
  }

  enviar() {
    alert('mensaje enviado: ' + this.nombre + ' ' +this.mensaje);
    this.enviado = true;
  }

  async permitirSalirDeRuta()
  {
    if (!this.mensaje || this.enviado || this.nombre){
      return true;
    }

    // const confirmacion = window.confirm('¿Quieres salir del formulario y perder los cambios realizados?');
    
      let resultado = await Swal.fire({
      title: '¿Deseas salir sin enviar?',
      text: "Perderás todos los cambios realizados",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Salir'
    })
    return resultado.isConfirmed
    
    
    

  }


}