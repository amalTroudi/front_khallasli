import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'app/environement/environement';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BillService {

  private baseUrl = `${environment.urlBackend}/bill`; // URL de base pour l'API des factures

  constructor(private http: HttpClient , public router: Router) { }

  // Récupérer toutes les factures
  getAllBills(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/all`);
  }

  // Récupérer les factures triées par montant croissant
  getBillsSortedByAmountAs(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/sortedByAmountAs`);
  }

  // Récupérer les factures triées par montant décroissant
  getBillsSortedByAmountDesc(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/desc`);
  }

  // Récupérer une facture par ID
  getBillById(id: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/id/${id}`);
  }

  // Récupérer une facture par ID de facture
  getBillByIdBill(id_bill: string): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/bill/${id_bill}`);
  }

  // Récupérer les factures par ID d'utilisateur
  getBillByIdUser(id_user: string): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/user/${id_user}`);
  }

  // Récupérer les factures par ID d'organisation
  getBillByOrganizationId(organisationId: string): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/organization/${organisationId}`);
  }
}
