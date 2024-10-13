import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AddUserParams } from 'app/model/user.model';
import { UserService } from 'app/services/user.service';

@Component({
  selector: 'app-add-user',
  standalone: true,
  imports: [],
  templateUrl: './add-user.component.html',
  styleUrl: './add-user.component.scss'
})
export class AddUserComponent {
   // Initialisation de l'objet utilisateur avec des valeurs par défaut
   user: AddUserParams = {
    name: '',
    email: '',
    password: '',
    roles: []  // Tableau vide pour les rôles
  };

  // Constructeur pour injecter les dépendances nécessaires
  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    // Méthode qui s'exécute après l'initialisation du composant
  }

  // Méthode pour ajouter un nouvel utilisateur
  createUser(): void {
    this.userService.addUser(this.user).subscribe(
      () => {
        console.log('Utilisateur créé avec succès!');
        this.router.navigate(['/users']); // Redirection vers la liste des utilisateurs après la création
      },
      error => {
        console.error('Erreur lors de la création de l\'utilisateur:', error);
      }
    );
  }

  // Méthode pour annuler l'opération et revenir à la liste des utilisateurs
  cancel(): void {
    this.router.navigate(['/users']);
  }
}

