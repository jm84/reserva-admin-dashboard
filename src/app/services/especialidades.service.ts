// especialidades.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EspecialidadesService {
  private apiUrl = 'http://localhost:8080/api/especialidades';

  constructor(private http: HttpClient) {}

  getEspecialidades(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  addEspecialidad(especialidad: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, especialidad);
  }

  updateEspecialidad(especialidad: any): Observable<any> {
    return this.http.put<any>(
      `${this.apiUrl}/${especialidad.id}`,
      especialidad
    );
  }

  deleteEspecialidad(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }
}
