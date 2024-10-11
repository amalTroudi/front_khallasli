import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'app/environement/environement';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DemandeAlientationPdvService {

  private baseUrl = `${environment.urlBackend}/demandeAlimentaionPdv`; // URL de base pour l'API demandeAlimentationPdv

  constructor(private http: HttpClient) { }

  // Récupérer toutes les demandes d'alimentation PDV
  getAllDemandeAlimentationPdv(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/all`);
  }

  // Trié par montant ascendant
  getDemandeAlimentationPdvSortedByMontantAs(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/sortedByMontantAs`);
  }

  // Trié par montant descendant
  getDemandeAlimentationPdvSortedByMontantDesc(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/desc`);
  }

  // Récupérer par statut
  getDemandeAlimentationPdvByStatus(status: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/${status}`);
  }

  // Compter les demandes par statut
  countDemandeAlimentationPdvByStatus(status: number): Observable<number> {
    return this.http.get<number>(`${this.baseUrl}/count/${status}`);
  }

  // Récupérer une demande par ID
  getDemandeAlimentationPdvById(id: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/${id}`);
  }

  // Récupérer par id_alimentation
  getDemandeAlimentationPdvByIdAlimentation(id_alimentation: string): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/id_alimentation/${id_alimentation}`);
  }

  // Récupérer par id_wallet
  getDemandeAlimentationPdvByIdWallet(id_wallet: string): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/id_wallet/${id_wallet}`);
  }

  // Récupérer par référence
  getDemandeAlimentationPdvByRef(ref: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/ref/${ref}`);
  }

  // Récupérer par banque
  getDemandeAlimentationPdvByBank(bank: string): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/bank/${bank}`);
  }
}