import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Paciente, PacienteDto } from '../interface/paciente';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PacienteService {

  urlApi: string = environment.api;

  constructor(
    private http: HttpClient
  ) { }

  listar(): Observable<PacienteDto> {
    return this.http.get<PacienteDto>(this.urlApi+'/pacientes/');
  }

  criar(paciente: Paciente): Observable<Paciente> {
    return this.http.post<Paciente>(this.urlApi+'/pacientes/', paciente);
  }

  atualizar(paciente: Paciente): Observable<Paciente> {
    return this.http.put<Paciente>(this.urlApi+'/pacientes/' + paciente.id + '/', paciente);
  }

  deletar(paciente: Paciente): Observable<any> {
    return this.http.delete<any>(this.urlApi+'/pacientes/' + paciente.id + '/');
  }

  buscar(id: number): Observable<Paciente> {
    return this.http.get<Paciente>(this.urlApi+'/pacientes/' + id + '/');
  }
}
