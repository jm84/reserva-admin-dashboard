// especialidad-dialog.component.ts
import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-especialidad-dialog',
  templateUrl: './especialidad-dialog.component.html',
  styleUrls: ['./especialidad-dialog.component.css']
})
export class EspecialidadDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<EspecialidadDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
