import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'app/environement/environement';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReportsService {

  private apiUrl = environment.urlBackend + '/reports';  // URL de base de ton API reports

  constructor(private http: HttpClient , public router: Router) { }

  // Récupérer tous les rapports
  getAllReports(): Observable<any> {
    return this.http.get(`${this.apiUrl}/all`);
  }

  // Récupérer un rapport par ID
  getReportById(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/id/${id}`);
  }

  // Récupérer un rapport par ID de rapport
  getReportByIdReport(id_report: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/id_pdv/${id_report}`);
  }

  // Récupérer les rapports par ID utilisateur
  getReportByIdUser(id_user: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/id_user/${id_user}`);
  }

  // Récupérer les rapports par ville
  getReportsByVille(ville: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/ville/${ville}`);
  }

  // Récupérer les rapports par zone
  getReportsByZone(zone: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/zone/${zone}`);
  }

  // Récupérer les rapports par nom de banque
  getReportsByNomBanque(nom_banque: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/nom_banque/${nom_banque}`);
  }
}