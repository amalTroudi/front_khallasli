import { Component, Inject } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AddUserParams } from 'app/model/user.model';
import { UserService } from 'app/services/user.service';

@Component({
  selector: 'app-update-user',
  standalone: true,
  imports: [],
  templateUrl: './update-user.component.html',
  styleUrl: './update-user.component.scss'
})
export class UpdateUserComponent {
  constructor(
    public dialogRef: MatDialogRef<UpdateUserComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public userService: UserService // Injecte le UserService ici
  ) {}

  formControl = new FormControl('', [
    Validators.required
  ]);

  getErrorMessage() {
    return this.formControl.hasError('required') ? 'Required field' : '';
  }

  submit() {
    // Logique soumise si nécessaire
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  stopEdit(): void {
    const updatedUserData: Partial<AddUserParams> = {
      name: this.data.name,
      email: this.data.email,
      password: this.data.password, // Assure-toi de ne pas envoyer le mot de passe si non nécessaire
      roles: this.data.roles
    };

    // Appelle la méthode updateUser du service
    this.userService.updateUser(this.data.id, updatedUserData).subscribe({
      next: (response) => {
        console.log('Utilisateur mis à jour avec succès', response);
        this.dialogRef.close();
      },
      error: (error) => {
        console.error('Erreur lors de la mise à jour de l\'utilisateur', error);
      }
    });
  }

}
