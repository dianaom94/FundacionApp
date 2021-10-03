import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from '../../service/login.service';

@Injectable({
  providedIn: 'root'
})
export class ValidacionGuard implements CanActivate{
  constructor(private router: Router, private loginService:LoginService) { 
    
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      let login:boolean = this.loginService.loged()
      if(!login){
        this.router.navigateByUrl('/')
        return login
      }else {
        return login;
      }
      
      
  }
}


