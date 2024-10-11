import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'app/environement/environement';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LeadsService {

  private baseUrl = `${environment.urlBackend}/leads`; // URL de base de l'API leads

  constructor(private http: HttpClient) { }

  // Récupérer tous les leads
  getAllLeads(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/all`);
  }

  // Récupérer un lead par ID
  getLeadsById(id: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/id/${id}`);
  }

  // Récupérer un lead par ID lead
  getLeadsByIdLead(id_lead: string): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/lead/${id_lead}`);
  }

  // Récupérer un lead par ID utilisateur
  getLeadsByIdUser(id_user: string): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/user/${id_user}`);
  }

  // Récupérer un lead par ID rapport
  getLeadsByIdReport(id_report: string): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/report/${id_report}`);
  }
}
