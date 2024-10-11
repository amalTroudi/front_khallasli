import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'app/environement/environement';
import { AddUserParams, UserEntity } from 'app/model/user.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl = environment.urlBackend + '/users';  // URL de base de l'API pour les utilisateurs

  constructor(private http: HttpClient) { }

  // Récupérer tous les utilisateurs
  getUsers(): Observable<UserEntity[]> {
    return this.http.get<UserEntity[]>(`${this.apiUrl}`);
  }

  // Ajouter un utilisateur
  addUser(data: AddUserParams): Observable<UserEntity> {
    return this.http.post<UserEntity>(`${this.apiUrl}`, data);
  }

  // Mettre à jour un utilisateur par ID
  updateUser(id: string, data: Partial<AddUserParams>): Observable<UserEntity> {
    return this.http.put<UserEntity>(`${this.apiUrl}/${id}`, data);
  }

  // Supprimer un utilisateur par ID
  deleteUser(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
