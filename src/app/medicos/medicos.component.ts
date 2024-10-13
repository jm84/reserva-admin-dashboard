import { Component, OnInit } from '@angular/core';
import { MedicosService } from '../services/medicos.service';

@Component({
  selector: 'app-medicos',
  templateUrl: './medicos.component.html',
  styleUrls: ['./medicos.component.css']
})
export class MedicosComponent implements OnInit {
  medicos: any[] = [];

  constructor(private medicosService: MedicosService) {}

  ngOnInit(): void {
    this.getMedicos();
  }

  getMedicos(): void {
    this.medicosService.getMedicos().subscribe(data => {
      this.medicos = data;
    });
  }

  addMedico(medico: any): void {
    this.medicosService.addMedico(medico).subscribe(() => {
      this.getMedicos();
    });
  }

  updateMedico(medico: any): void {
    this.medicosService.updateMedico(medico).subscribe(() => {
      this.getMedicos();
    });
  }

  deleteMedico(id: number): void {
    this.medicosService.deleteMedico(id).subscribe(() => {
      this.getMedicos();
    });
  }
}
