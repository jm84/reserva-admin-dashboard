import { Component, OnInit } from '@angular/core';
import { AsignarHorariosService } from '../services/asignar-horarios.service';

@Component({
  selector: 'app-asignar-horarios',
  templateUrl: './asignar-horarios.component.html',
  styleUrls: ['./asignar-horarios.component.css']
})
export class AsignarHorariosComponent implements OnInit {
  medicos: any[] = [];
  horarios: any[] = [];

  constructor(private asignarHorariosService: AsignarHorariosService) {}

  ngOnInit(): void {
    this.getMedicos();
    this.getHorarios();
  }

  getMedicos(): void {
    this.asignarHorariosService.getMedicos().subscribe(data => {
      this.medicos = data;
    });
  }

  getHorarios(): void {
    this.asignarHorariosService.getHorarios().subscribe(data => {
      this.horarios = data;
    });
  }

  asignarHorario(medicoId: number, horarioId: number): void {
    this.asignarHorariosService.asignarHorario(medicoId, horarioId).subscribe(() => {
      alert('Horario asignado');
    });
  }
}
