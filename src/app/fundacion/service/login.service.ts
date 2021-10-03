import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private fa: AngularFireAuth, private router: Router) { 
    
  }
  

  login (user: string, pass:string){
  let respuesta = this.fa.signInWithEmailAndPassword(user, pass).then((result:any) =>{
    localStorage.setItem("logueado","true")
    this.router.navigate(['home'])

  })


  .catch((error:any)=>
    Swal.fire('error','Ocurrió un error al iniciar sesión','error')
    )
  }

  loged(){
    if(localStorage.getItem('logueado')=="true"){
      return true;
    }else {return false}
  }

  isLoged(){
    if(localStorage.getItem('logueado')=="true"){
      return false;
    }else {return true}
  }
}
