import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { IMinisterio, Ministerio } from '../Intefaces/IMinisterio'; 

@Injectable({
  providedIn: 'root'
})
export class MinisterioServiceService {
  private endPoint:string= environment.endPoint;
  private apiUrl: string = this.endPoint+ "ministerio/ConsultarMinisterio"


  resultados:  Ministerio[] = [];
  
  constructor(private http:HttpClient) { }

  get getDocument(){
    console.log(localStorage.getItem("usuario en memoria: "+'token_value'));
     return localStorage.getItem('token_value');
   }

  getMinisterios():Observable<IMinisterio>
  {

    let token = localStorage.getItem('token_value');
    
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`, 
      }),
    };

    console.log(this.apiUrl);
     return this.http.get<IMinisterio>(`${this.apiUrl}`, httpOptions)
  }
  

  getMinisterios2():Observable<Ministerio[]>
  {
    let token = localStorage.getItem('token_value');
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`, 
      }),
    };
    console.log(this.apiUrl);
    return this.http.get<Ministerio[]>(`${this.apiUrl}`, httpOptions)
  }


  
  add(ministerio: Ministerio){
    return this.http.post(this.apiUrl,ministerio);
  }

  update(id:number, ministerio: Ministerio){
    alert(JSON.stringify(ministerio));
    return this.http.put(this.apiUrl+"/"+id, ministerio);
  }



  delete(MinisterioId:number):Observable<void>{
    return this.http.delete<void>(`${this.apiUrl}/${MinisterioId}`);
  }

}
