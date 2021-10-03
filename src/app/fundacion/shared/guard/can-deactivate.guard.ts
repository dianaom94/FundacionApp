import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { PuedeDesactivar } from '../../service/interfaces/puede-desactivar';

@Injectable({
  providedIn: 'root'
})
export class CanDeactivateGuard implements CanDeactivate<PuedeDesactivar> {
  canDeactivate(component: PuedeDesactivar) {
          return component.permitirSalirDeRuta ? component.permitirSalirDeRuta() : true;

          // let hola = true
          // let saludo
          // saludo = (hola == true) ? "hola":"adios";
          
        }
      

      
  
}
