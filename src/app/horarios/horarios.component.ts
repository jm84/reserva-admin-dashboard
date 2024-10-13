import { Component, OnInit } from '@angular/core';
import { HorariosService } from '../services/horarios.service';

@Component({
  selector: 'app-horarios',
  templateUrl: './horarios.component.html',
  styleUrls: ['./horarios.component.css']
})
export class HorariosComponent implements OnInit {
  horarios: any[] = [];

  constructor(private horariosService: HorariosService) {}

  ngOnInit(): void {
    this.getHorarios();
  }

  getHorarios(): void {
    this.horariosService.getHorarios().subscribe(data => {
      this.horarios = data;
    });
  }

  addHorario(horario: any): void {
    this.horariosService.addHorario(horario).subscribe(() => {
      this.getHorarios();
    });
  }

  updateHorario(horario: any): void {
    this.horariosService.updateHorario(horario).subscribe(() => {
      this.getHorarios();
    });
  }

  deleteHorario(id: number): void {
    this.horariosService.deleteHorario(id).subscribe(() => {
      this.getHorarios();
    });
  }
}
