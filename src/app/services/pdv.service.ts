import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'app/environement/environement';
import { PdvEntity, PdvParams } from 'app/model/pdv.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PdvService {

  private apiUrl = environment.urlBackend + '/pdv';  // URL de base de ton API PDV

  constructor(private http: HttpClient , public router: Router) { }

  // Récupérer tous les PDVs
  getAllPdvs(): Observable<any> {
    return this.http.get(`${this.apiUrl}/all`);
  }

  // Récupérer un PDV par ID
  getPdvById(id: number): Observable<PdvEntity> {
    return this.http.get<PdvEntity>(`${this.apiUrl}/id/${id}`);
  }

  // Récupérer un PDV par identifiant PDV
  getPdvByIdPdv(id_pdv: string): Observable<PdvEntity> {
    return this.http.get<PdvEntity>(`${this.apiUrl}/id_pdv/${id_pdv}`);
  }

  // Récupérer un PDV par identifiant commercial
  getPdvByIdCommercial(id_commercial: string): Observable<PdvEntity> {
    return this.http.get<PdvEntity>(`${this.apiUrl}/id_commercial/${id_commercial}`);
  }

  // Récupérer un PDV par identifiant de catégorie
  getPdvByIdCategorie(id_categorie: string): Observable<PdvEntity> {
    return this.http.get<PdvEntity>(`${this.apiUrl}/id_categorie/${id_categorie}`);
  }

  // Récupérer un PDV par ville
  getPdvByVille(ville: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/ville/${ville}`);
  }

  // Récupérer un PDV par région
  getPdvByRegion(region: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/region/${region}`);
  }

  // Récupérer un PDV par code comptable
  getPdvByCodeComptable(code_comptable: number): Observable<PdvEntity> {
    return this.http.get<PdvEntity>(`${this.apiUrl}/code_comptable/${code_comptable}`);
  }

  // Ajouter un PDV
  addPdv(data: PdvParams): Observable<PdvEntity> {
    return this.http.post<PdvEntity>(this.apiUrl, data);
  }

  // Supprimer un PDV par ID
  deletePdv(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/delete/${id}`);
  }

  // Mettre à jour un PDV
  updatePdv(id: string, data: Partial<PdvParams>): Observable<PdvEntity> {
    return this.http.put<PdvEntity>(`${this.apiUrl}/modifier/${id}`, data);
  }
}
