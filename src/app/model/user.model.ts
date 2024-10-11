export interface UserEntity {
    id: number;
    name: string;
    email: string;
    password: string;
    accessToken?: string; // Optionnel
    roles: string[]; // Tableau de rôles, par exemple ['admin', 'user']
}
export interface AddUserParams {
    name: string;
    email: string;
    password: string;
    roles: string[]; // Tableau de rôles
}
