import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'app/environement/environement';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WalletService {

  private apiUrl = environment.urlBackend + '/wallet';  // URL de base de ton API wallet

  constructor(private http: HttpClient) { }

  // Récupérer tous les wallets
  getAllWallets(): Observable<any> {
    return this.http.get(`${this.apiUrl}/all`);
  }

  // Récupérer les wallets triés par crédit croissant
  getWalletSortedByCreditAs(): Observable<any> {
    return this.http.get(`${this.apiUrl}/Ass`);
  }

  // Récupérer les wallets triés par crédit décroissant
  getWalletSortedByCreditDesc(): Observable<any> {
    return this.http.get(`${this.apiUrl}/desc`);
  }

  // Récupérer les wallets par statut
  getWalletByStatus(status: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/${status}`);
  }

  // Compter les wallets par statut
  countWalletByStatus(status: string): Observable<number> {
    return this.http.get<number>(`${this.apiUrl}/count/${status}`);
  }

  // Récupérer un wallet par ID
  getWalletById(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  // Récupérer un wallet par ID de wallet
  getWalletByIdWallet(id_wallet: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/id_wallet/${id_wallet}`);
  }

  // Récupérer les wallets par ID commercial
  getWalletByCommercial(id_commercial: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/id_commercial/${id_commercial}`);
  }
}

