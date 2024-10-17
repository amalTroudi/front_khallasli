import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'app/environement/environement';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = environment.urlBackend + '/api/v1/authentication';  // URL de base de l'API d'authentification

  constructor(private http: HttpClient,  public router: Router) { }

  // Authentifier un utilisateur (login)
  login(data:any): Observable<any> {

    return this.http.post(environment.urlBackend + 'sessions/', data);
      }
}
