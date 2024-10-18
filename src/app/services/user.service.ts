import { HttpClient, HttpContext, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'app/environement/environement';
import { AddUserParams, User} from 'app/model/user.model';
import { Observable } from 'rxjs';
  

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl = environment.urlBackend  ;  // URL de base de l'API pour les utilisateurs
 private token ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE3MjkxNzc1MTEsImlzcyI6IkZ1c2UiLCJleHAiOjE3Mjk3ODIzMTF9.yGFUK4qdxXCOaX8WWoGBSt5NH7oJC4xSQlc0UsiTmPo";

 constructor(private http: HttpClient,  public router: Router) { }

   sendData(data: any) {
  // Créez des en-têtes HTTP
  const headers = new HttpHeaders({
     // Calculez la longueur du corps
     // Remplacez par votre hôte
  });

  return this.http.post('http://localhost:9000/get-users', data, { headers });
}
 

  // Récupérer tous les utilisateurs
  getUsers(): Observable<User[]> {
    // Créez des en-têtes personnalisés
    const headers = new HttpHeaders({
      'Content-Type': 'application/json', // Type de contenu
      //'Content-Length': JSON.stringify(data).length.toString(),
      'Authorization': 'Bearer ' +this.token, 
      'Host': 'localhost:4200',// Ajoutez un token d'authentification si nécessaire
      // Vous pouvez ajouter d'autres en-têtes ici
    });

    return this.http.get<User[]> ('http://localhost:9000/get-users', { headers });
  }
 

  // Ajouter un utilisateur
  addUser(data: AddUserParams): Observable<User> {
    return this.http.post<User>(`${this.apiUrl}`, data);
  }

  // Mettre à jour un utilisateur par ID
  updateUser(id: string, data: Partial<AddUserParams>): Observable<User> {
    return this.http.put<User>(`${this.apiUrl}/${id}`, data);
  }

  // Supprimer un utilisateur par ID
  deleteUser(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
