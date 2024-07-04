import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environments';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserDataService {

  constructor(private http: HttpClient) {}

url: string = environment.apiUrl; 

//obtener usuarios
  getUsers(): any {  
  return this.http.get(this.url); 
  }

//obtiene un respectivo usuario con el id
getUserId(id: number): Observable<any> {
  const url = `${this.url}/${id}`;
  return this.http.get<any>(url);
}

}
