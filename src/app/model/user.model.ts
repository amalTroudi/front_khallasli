export class UserEntity {
    id: number;
    name: string;
    email: string;
    password: string;
    accessToken?: string; // Optionnel
    roles: string[]; // Tableau de rôles, par exemple ['admin', 'user']
}
export class AddUserParams {
    name: string;
    email: string;
    password: string;
    roles: string[]; // Tableau de rôles
}
