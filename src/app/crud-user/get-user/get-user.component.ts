import { Component } from '@angular/core';
import { User } from 'app/model/user.model';
import { UserService } from 'app/services/user.service';

@Component({
  selector: 'app-get-user',
  standalone: true,
  imports: [],
  templateUrl: './get-user.component.html',
  styleUrl: './get-user.component.scss'
})
export class GetUserComponent {
  users: User[] = []; // Variable pour stocker la liste des utilisateurs

  constructor(private userService: UserService) { } // Injecte le service utilisateur

  ngOnInit(): void {
    this.getUsers(); // Appelle la méthode getUsers au chargement du composant
  }

  // Méthode pour récupérer tous les utilisateurs
  getUsers(): void {
    this.userService.getUsers().subscribe({
      next: (response: User[]) => {
        this.users = response; // Assigne la réponse à la variable users
        console.log('Utilisateurs récupérés avec succès', this.users);
      },
      error: (error) => {
        console.error('Erreur lors de la récupération des utilisateurs', error);
      }
    });
  } 

}
