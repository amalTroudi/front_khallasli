import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'app/environement/environement';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HistoryWalletPdvService {

  private baseUrl = `${environment.urlBackend}/historyWalletPdv`; // URL de base pour l'API historyWalletPdv

  constructor(private http: HttpClient) { }

  // Récupérer tous les historiques
  getAllHistoryWalletPdv(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/all`);
  }

  // Trié par ancienneté ascendante
  getHistoryWalletPdvSortedByOldAs(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/oldAs`);
  }

  // Trié par ancienneté descendante
  getHistoryWalletPdvSortedByOldDesc(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/descOld`);
  }

  // Trié par nouveauté ascendante
  getHistoryWalletPdvSortedByNewAs(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/newAs`);
  }

  // Trié par nouveauté descendante
  getHistoryWalletPdvSortedByNewDesc(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/descNew`);
  }

  // Trié par débit montant ascendant
  getHistoryWalletPdvSortedByDebitAs(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/debitAs`);
  }

  // Trié par débit montant descendant
  getHistoryWalletPdvSortedByDebitDesc(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/descDebit`);
  }

  // Trié par puv montant ascendant
  getHistoryWalletPdvSortedByPuvAs(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/PuvAs`);
  }

  // Trié par puv montant descendant
  getHistoryWalletPdvSortedByPuvDesc(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/descPuv`);
  }

  // Récupérer par ID
  getHistoryWalletPdvById(id: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/${id}`);
  }

  // Récupérer par id_history
  getHistoryWalletPdvByIdHistory(id_history: string): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/id_history/${id_history}`);
  }

  // Récupérer par id_wallet
  getHistoryWalletPdvByIdWallet(id_wallet: string): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/id_wallet/${id_wallet}`);
  }

  // Récupérer par service
  getHistoryWalletPdvByService(service: string): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/service/${service}`);
  }
}
