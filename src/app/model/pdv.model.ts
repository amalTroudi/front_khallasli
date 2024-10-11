export interface PdvEntity {
    id: number;
    id_pdv: string;
    id_commercial: string;
    pos: string;
    code_comptable: number;
    ville: string;
    dt: Date;
    id_categorie: string;
    region: string;
    etat: string;
  }

  export interface PdvParams {
    id: number;
    id_pdv: string;
    id_commercial: string;
    pos: string;
    code_comptable: number;
    ville: string;
    dt: Date;
    id_categorie: string;
    region: string;
    etat: string;
  }