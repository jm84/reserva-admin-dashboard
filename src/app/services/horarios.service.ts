// horarios.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HorariosService {
  private apiUrl = 'http://localhost:8080/api/horarios';

  constructor(private http: HttpClient) {}

  getHorarios(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  addHorario(horario: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, horario);
  }

  updateHorario(horario: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${horario.id}`, horario);
  }

  deleteHorario(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }
}
