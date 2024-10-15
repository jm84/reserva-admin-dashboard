import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MedicosService } from '../services/medicos.service';
import { EspecialidadesService } from '../services/especialidades.service';
import { MedicosDialogComponent } from '../medico-dialog/medico-dialog.component';

@Component({
  selector: 'app-medicos',
  templateUrl: './medicos.component.html',
  styleUrls: ['./medicos.component.css']
})
export class MedicosComponent implements OnInit {

  medicos: any[] = [];
  especialidades: any[] = [];
  displayedColumns: string[] = ['nombre', 'especialidad', 'acciones'];
  medicoForm: FormGroup;
  dialogRef: any;
  isEdit: boolean = false;
  currentMedicoId: number | undefined;
  dialogTemplate: any;

  constructor(
    private medicosService: MedicosService,
    private especialidadesService: EspecialidadesService,
    private dialog: MatDialog,
    private fb: FormBuilder
  ) {
    this.medicoForm = this.fb.group({
      nombre: [''],
      especialidad: ['']
    });
  }

  ngOnInit(): void {
    this.getMedicos();
    this.getEspecialidades();
  }

  getMedicos(): void {
    this.medicosService.getMedicos().subscribe(data => {
      this.medicos = data;
    });
  }

  getEspecialidades(): void {
    this.especialidadesService.getEspecialidades().subscribe(data => {
      this.especialidades = data;
    });
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(MedicosDialogComponent, {
      width: '250px',
      data: { form: this.medicoForm }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // Handle the result if needed
    });
  }

  editMedico(medico: any): void {
    this.isEdit = true;
    this.currentMedicoId = medico.id;
    this.medicoForm.patchValue(medico);
    this.dialogRef = this.dialog.open(this.dialogTemplate);
  }

  saveMedico(): void {
    const formValue = this.medicoForm.value;
    const especialidad = this.especialidades.find(e => e.nombre === formValue.especialidad);
    const medico = {
      ...formValue,
      especialidad: especialidad
    };

    if (this.isEdit) {
      this.medicosService.updateMedico(medico).subscribe(() => {
        this.getMedicos();
        this.dialogRef.close();
      });
    } else {
      this.medicosService.addMedico(medico).subscribe(() => {
        this.getMedicos();
        this.dialogRef.close();
      });
    }
  }

  deleteMedico(id: number): void {
    this.medicosService.deleteMedico(id).subscribe(() => {
      this.getMedicos();
    });
  }
}
