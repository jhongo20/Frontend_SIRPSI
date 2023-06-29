import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Rol } from 'src/app/Intefaces/IRol';
import { IUsuarioLogin, UsuarioLogin } from 'src/app/Intefaces/IUsuarioLogin';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private endPoint:string= environment.endPoint;
  private apiUrl: string = this.endPoint+ "user/Login"
  
  resultados:  Rol[] = [];
  
  constructor(private http:HttpClient, private router: Router) { }
   //register(user: UserInterface){
   //  return this.htp.post(this.baseUrl+'Register',user);
  // }


   login(user: UsuarioLogin){
    console.log("datos: "+JSON.stringify(user));
    return this.http.post(this.apiUrl,user);
   }

   get getDocument(){
     return localStorage.getItem('document');
   }

   get isAutenticado(){
     return !!localStorage.getItem('token_value');
   }

   logout(){
     localStorage.removeItem('expiration');
     localStorage.removeItem('token_value');
     this.router.navigateByUrl('/salir');

   }
}