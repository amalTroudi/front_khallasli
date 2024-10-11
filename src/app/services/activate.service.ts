import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'app/environement/environement';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ActivateService {


  private baseUrl = `${environment.urlBackend}/activite`; // URL de base pour l'API

  constructor(private http: HttpClient) { }

  // Récupérer toutes les activités
  getAllActivites(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}`);
  }
}
