import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'app/environement/environement';
import { OrganisationModel } from 'app/model/organisation.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrganisationService {

  private apiUrl = environment.urlBackend + '/organisation';

  constructor(private http: HttpClient) { }

  // Méthode pour obtenir toutes les organisations
  getAllOrganisations(): Observable<OrganisationModel[]> {
    return this.http.get<OrganisationModel[]>(`${this.apiUrl}/all`);
  }

  // Méthode pour obtenir une organisation par ID
  getOrganisationById(id: number): Observable<OrganisationModel> {
    return this.http.get<OrganisationModel>(`${this.apiUrl}/id/${id}`);
  }

  // Méthode pour obtenir une organisation par id_operateur
  getOrganisationByIdOperateur(id_operateur: string): Observable<OrganisationModel> {
    return this.http.get<OrganisationModel>(`${this.apiUrl}/id_organisation/${id_operateur}`);
  }

  // Méthode pour obtenir une organisation par libellé
  getOrganisationByLibelle(libelle: string): Observable<OrganisationModel> {
    return this.http.get<OrganisationModel>(`${this.apiUrl}/libelle/${libelle}`);
  }

}