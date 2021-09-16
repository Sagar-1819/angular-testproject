import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthenicateService {

  constructor( private http:HttpClient) { }

  

    registeruser(user:any){

      let url = "http://localhost:3000/register";
       return this.http.post(url,user,{});

      

    }

      
   
    
}
