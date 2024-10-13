// especialidades.component.ts
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EspecialidadesService } from '../services/especialidades.service';
import { EspecialidadDialogComponent } from '../especialidad-dialog/especialidad-dialog.component';

@Component({
  selector: 'app-especialidades',
  templateUrl: './especialidades.component.html',
  styleUrls: ['./especialidades.component.css'],
})
export class EspecialidadesComponent implements OnInit {
  especialidades: any[] = [];
  displayedColumns: string[] = ['id', 'nombre', 'acciones'];

  constructor(
    private especialidadesService: EspecialidadesService,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.getEspecialidades();
  }

  getEspecialidades(): void {
    this.especialidadesService.getEspecialidades().subscribe((data) => {
      this.especialidades = data;
    });
  }

  openDialog(especialidad?: any): void {
    const dialogRef = this.dialog.open(EspecialidadDialogComponent, {
      width: '250px',
      data: especialidad ? { ...especialidad } : {},
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        if (especialidad) {
          this.updateEspecialidad(result);
        } else {
          this.addEspecialidad(result);
        }
      }
    });
  }

  addEspecialidad(especialidad: any): void {
    this.especialidadesService.addEspecialidad(especialidad).subscribe(() => {
      this.getEspecialidades();
    });
  }

  updateEspecialidad(especialidad: any): void {
    this.especialidadesService
      .updateEspecialidad(especialidad)
      .subscribe(() => {
        this.getEspecialidades();
      });
  }

  deleteEspecialidad(id: number): void {
    this.especialidadesService.deleteEspecialidad(id).subscribe(() => {
      this.getEspecialidades();
    });
  }
}
