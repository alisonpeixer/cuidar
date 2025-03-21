import { Injectable } from '@angular/core';
import { Paciente } from '../interface/paciente';

@Injectable({
  providedIn: 'root'
})
export class PacienteLookupService {

constructor() { }


  filterService: string = 'http://localhost:8000/pacientes';

  fieldFormat(value: Paciente): any {
    console.log(value);
    return `${value.codigo} - ${value.nome_completo}`;
  }

}
