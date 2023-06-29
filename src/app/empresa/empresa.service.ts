import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { IEmpresa, Empresa } from '../Intefaces/IEmpresa'; 

@Injectable({
  providedIn: 'root'
})
export class EmpresaServiceService {
  private endPoint:string= environment.endPoint;
  private apiUrl: string = this.endPoint + "empresas/ConsultarEmpresas"

  resultados:  Empresa[] = [];
  
  constructor(private http:HttpClient) { }

  get getDocument(){
     return localStorage.getItem('token_value');
   }

  getEmpresas():Observable<IEmpresa>
  {
    let token = localStorage.getItem('token_value');
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`, 
      }),
    };
    debugger
    console.log(this.apiUrl);
    return this.http.get<IEmpresa>(`${this.apiUrl}`, httpOptions)
  }
  
  add(empresa:Empresa){
    console.log("Datos que llegan de empresa "+ empresa);
    return this.http.post<IEmpresa>(this.apiUrl,empresa);
  }

  update(empresaId:number, empresa:Empresa){
    console.log("Datos que llegan de empresa "+ empresa);

    return this.http.put( this.apiUrl+"/"+empresaId, empresa );
  }

  delete(empresaId:number):Observable<void>{
    console.log("id a borrar: "+ empresaId);
    return this.http.delete<void>(`${this.apiUrl}/${empresaId}`);
  }

}
