import { Component, ViewChild } from '@angular/core';
import { PacienteLookupService } from '../../paciente/service/paciente-lookup.service';
import { Anamnese, getDefaultAnamnese } from '../interface/anamnese';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-anamnese-crud',
  templateUrl: './anamnese-crud.component.html',
  styleUrl: './anamnese-crud.component.css'
})
export class AnamneseCrudComponent {

  dadosAnamnese: Anamnese = getDefaultAnamnese();

  constructor(
    public pacienteLookupService: PacienteLookupService
  ) { }

  @ViewChild('dadosPacienteForm',{static: false}) dadosPacienteForm!: NgForm;


  salvar(): void {
    console.log(this.dadosAnamnese);
    // Salvar na base de dados
  }


}
