import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'app/environement/environement';

@Injectable({
  providedIn: 'root',
})
export class AlimentationCommercialPdvService {
  private apiUrl = environment.urlBackend +'/alimentaionCommercialPdv'; // URL du backend

  constructor(private http: HttpClient) {}

  // Obtenir toutes les activités
  getAllAlimentationCommercialPdv(): Observable<any> {
    return this.http.get(`${this.apiUrl}/all`);
  }

  // Obtenir les activités triées par montant croissant
  getSortedByMontantAs(): Observable<any> {
    return this.http.get(`${this.apiUrl}/sortedByMontantAs`);
  }

  // Obtenir les activités triées par montant décroissant
  getSortedByMontantDesc(): Observable<any> {
    return this.http.get(`${this.apiUrl}/desc`);
  }

  // Obtenir les activités par statut
  getByStatus(status: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/${status}`);
  }

  // Compter les activités par statut
  countByStatus(status: number): Observable<number> {
    return this.http.get<number>(`${this.apiUrl}/count/${status}`);
  }

  // Obtenir une activité par ID
  getById(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`);
  }
}
