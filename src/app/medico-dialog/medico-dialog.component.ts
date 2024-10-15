import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-medicos-dialog',
  template: `
    <h1 mat-dialog-title>Medico Form</h1>
    <div mat-dialog-content>
      <form [formGroup]="medicoForm">
        <mat-form-field>
          <input matInput placeholder="Nombre" formControlName="nombre">
        </mat-form-field>
        <mat-form-field>
          <input matInput placeholder="Especialidad" formControlName="especialidad">
        </mat-form-field>
      </form>
    </div>
    <div mat-dialog-actions>
      <button mat-button (click)="onNoClick()">Cancel</button>
      <button mat-button (click)="onSaveClick()">Save</button>
    </div>
  `
})
export class MedicosDialogComponent {
  medicoForm: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<MedicosDialogComponent>,
    private fb: FormBuilder
  ) {
    this.medicoForm = this.fb.group({
      nombre: [''],
      especialidad: ['']
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onSaveClick(): void {
    // Logic to save the form
    this.dialogRef.close();
  }
}
