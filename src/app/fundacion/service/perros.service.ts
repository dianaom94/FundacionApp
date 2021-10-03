import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.prod';
import { HttpClient} from '@angular/common/http';

const baseUrl = environment.baseUrl;
@Injectable({
  providedIn: 'root'
})
export class PerrosService {

  constructor(private http:HttpClient) { }

  getAllBreeds (){
    return this.http.get(baseUrl+"/breeds")
  }

  searchBreed(name: string){
    return this.http.get(baseUrl+"/breeds/search?q="+name)
  }

  getimage(id:string){
    return this.http.get(baseUrl+"/images/"+id)
  }
}
