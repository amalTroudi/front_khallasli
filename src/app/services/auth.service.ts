import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'app/environement/environement';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = environment.urlBackend + '/api/v1/authentication';  // URL de base de l'API d'authentification

  constructor(private http: HttpClient) { }

  // Authentifier un utilisateur (login)
  authenticate(data: { email: string, password: string }): Observable<{ accessToken: string, name: string }> {
    return this.http.post<{ accessToken: string, name: string }>(`${this.apiUrl}`, data);
  }
}
