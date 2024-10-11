import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'app/environement/environement';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WalletPdvService {

  private apiUrl = environment.urlBackend + '/walletPdv';  // URL de base de ton API walletPdv

  constructor(private http: HttpClient) { }

  // Récupérer tous les wallet PDV
  getAllWalletPdv(): Observable<any> {
    return this.http.get(`${this.apiUrl}/all`);
  }

  // Récupérer les wallets PDV par statut
  getWalletPdvByStatus(status: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/${status}`);
  }

  // Compter les wallets PDV par statut
  countWalletPdvByStatus(status: string): Observable<number> {
    return this.http.get<number>(`${this.apiUrl}/count/${status}`);
  }

  // Récupérer un wallet PDV par ID
  getWalletPdvById(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  // Récupérer un wallet PDV par ID wallet
  getWalletPdvByIdWallet(id_wallet: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/id_wallet/${id_wallet}`);
  }

  // Récupérer les wallets PDV par ID commercial
  getWalletPdvByCommercial(companyId: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/companyId/${companyId}`);
  }

  // Récupérer les wallets PDV par ID PDV
  getWalletPdvByIdPdv(id_pdv: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/id_pdv/${id_pdv}`);
  }
}

