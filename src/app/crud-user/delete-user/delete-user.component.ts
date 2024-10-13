import { Component, Input } from '@angular/core';
import { UserEntity } from 'app/model/user.model';
import { UserService } from 'app/services/user.service';

@Component({
  selector: 'app-delete-user',
  standalone: true,
  imports: [],
  templateUrl: './delete-user.component.html',
  styleUrl: './delete-user.component.scss'
})
export class DeleteUserComponent {
  @Input() user!: UserEntity; // Utilisateur à supprimer, passé en entrée (remplace dialogRef)
  loading = false;            // Indicateur de chargement

  constructor(private userService: UserService) {}  // Service utilisateur pour les requêtes HTTP

  // Annulation de la suppression, par exemple, navigation ou action d'annulation
  onCancel(): void {
    console.log('Suppression annulée pour l\'utilisateur :', this.user);
    // Logique supplémentaire si nécessaire, comme navigation ou message
  }

  // Confirmation de la suppression de l'utilisateur
  confirmDelete(): void {
    this.loading = true; // Activer l'indicateur de chargement
  
    // Convertir l'ID (number) en string pour éviter l'erreur
    this.userService.deleteUser(this.user.id.toString()).subscribe({
      next: () => {
        this.loading = false; // Désactiver l'indicateur de chargement après la suppression réussie
        console.log(`Utilisateur avec l'ID ${this.user.id} supprimé avec succès.`);
        // Logique supplémentaire comme mise à jour de la liste d'utilisateurs
      },
      error: (err) => {
        this.loading = false; // Désactiver l'indicateur de chargement en cas d'erreur
        console.error('Erreur lors de la suppression de l\'utilisateur:', err);
        // Logique de gestion des erreurs, comme affichage d'un message
      }
    });
  }
}
