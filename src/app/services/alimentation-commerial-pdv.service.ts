import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'app/environement/environement';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlimentationCommerialPdvService {

 
  private baseUrl = `${environment.urlBackend}/alimentaionCommercialPdv`; // URL de base pour l'API

  constructor(private http: HttpClient) { }

  // Récupérer toutes les alimentations commerciales des PDV
  getAllAlimentationCommercialPdv(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/all`);
  }

  // Récupérer les alimentations commerciales des PDV triées par montant croissant
  getAlimentationCommercialPdvSortedByMontantAs(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/sortedByMontantAs`);
  }

  // Récupérer les alimentations commerciales des PDV triées par montant décroissant
  getAlimentationCommercialPdvSortedByMontantDesc(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/desc`);
  }

  // Récupérer les alimentations commerciales des PDV par statut
  getAlimentationCommercialPdvByStatus(status: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/${status}`);
  }

  // Compter le nombre d'alimentations commerciales des PDV par statut
  countAlimentationCommercialPdvByStatus(status: number): Observable<number> {
    return this.http.get<number>(`${this.baseUrl}/count/${status}`);
  }

  // Récupérer une alimentation commerciale de PDV par ID
  getAlimentationCommercialPdvById(id: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/${id}`);
  }
}
