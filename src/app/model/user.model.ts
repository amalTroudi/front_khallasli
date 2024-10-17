export class User {
    id: number;
    name: string;
    email: string;
    password: string;
    accessToken?: string; 
    roles: string[]; 
}
export class AddUserParams {
    name: string;
    email: string;
    password: string;
    roles: string[]; 
}
