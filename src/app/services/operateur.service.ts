import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'app/environement/environement';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OperateurService {

  private baseUrl = `${environment.urlBackend}/operateur`; // L'URL de base de ton API

  constructor(private http: HttpClient , public router: Router) { }

  // Récupérer tous les opérateurs
  getAllOperateurs(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/all`);
  }

  // Récupérer un opérateur par ID
  getOperateurById(id: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/id/${id}`);
  }

  // Récupérer un opérateur par ID opérateur
  getOperateurByIdOperateur(id_operateur: string): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/id_operateur/${id_operateur}`);
  }

  // Récupérer un opérateur par ID opérateur topup
  getOperateurByIdOperateurTopup(id_operateur_topup: string): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/topup/${id_operateur_topup}`);
  }

  // Récupérer un opérateur par libellé
  getOperateurByLibelle(libelle: string): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/libelle/${libelle}`);
  }
}
