// medicos.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MedicosService {
  private apiUrl = 'http://localhost:8080/api/medicos';

  constructor(private http: HttpClient) {}

  getMedicos(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  addMedico(medico: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, medico);
  }

  updateMedico(medico: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${medico.id}`, medico);
  }

  deleteMedico(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }
}
