import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { LoginService } from '../../service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  constructor(private fb: FormBuilder, private LoginService: LoginService) { }
  miFormulario: FormGroup = this.fb.group({
    login: ['', [Validators.required,Validators.email]],
    password: ['', [Validators.required,Validators.minLength(6)]]
  })
  ngOnInit(): void {
  }
  recibirLogin (){
    this.LoginService.login(this.miFormulario.controls.login.value, 
      this.miFormulario.controls.password.value)
  
  }

  enviar (){
    if (this.miFormulario.invalid){
      this.miFormulario.markAllAsTouched();
      return;
    }
  }
}
