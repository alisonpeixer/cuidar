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
    return this.http.get<PacienteDto>(this.urlApi+'/pacientes/', {headers: { 'X-PO-Screen-Lock': 'true' }});
  }

  cadastrar(paciente: Paciente): Observable<Paciente> {
    return this.http.post<Paciente>(this.urlApi+'/paciente/', paciente, {headers: { 'X-PO-Screen-Lock': 'true' }});
  }

  atualizar(paciente: Paciente): Observable<Paciente> {
    return this.http.put<Paciente>(this.urlApi+'/paciente/' + paciente.codigo + '/', paciente, {headers: { 'X-PO-Screen-Lock': 'true' }});
  }

  deletar(paciente: Paciente): Observable<any> {
    return this.http.delete<any>(this.urlApi+'/pacientes/' + paciente.codigo + '/', {headers: { 'X-PO-Screen-Lock': 'true' }});
  }

  buscar(id: string): Observable<Paciente> {
    return this.http.get<Paciente>(this.urlApi+'/paciente/' + id + '/', {headers: { 'X-PO-Screen-Lock': 'true' }});
  }
}
