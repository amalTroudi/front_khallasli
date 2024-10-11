import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'app/environement/environement';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlimentationCommerialWalletService {

  private baseUrl = `${environment.urlBackend}/alimentaionCommercialWallet`; // URL de base pour l'API

  constructor(private http: HttpClient) { }

  // Récupérer toutes les alimentations commerciales de portefeuille
  getAllAlimentationCommercialWallets(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/all`);
  }

  // Récupérer les alimentations commerciales de portefeuille triées par montant croissant
  getAlimentationCommercialWalletSortedByMontantAs(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/sortedByMontantAs`);
  }

  // Récupérer les alimentations commerciales de portefeuille triées par montant décroissant
  getAlimentationCommercialWalletSortedByMontantDesc(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/desc`);
  }

  // Récupérer les alimentations commerciales de portefeuille par statut
  getAlimentationCommercialWalletByStatus(status: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/${status}`);
  }

  // Compter le nombre d'alimentations commerciales de portefeuille par statut
  countAlimentationCommercialWalletByStatus(status: number): Observable<number> {
    return this.http.get<number>(`${this.baseUrl}/count/${status}`);
  }

  // Récupérer une alimentation commerciale de portefeuille par ID
  getAlimentationCommercialWalletById(id: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/${id}`);
  }
}
