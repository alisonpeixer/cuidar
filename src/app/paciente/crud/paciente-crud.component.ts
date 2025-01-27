import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { PoBreadcrumb, PoComboOption, PoSelectComponent, PoSelectOption } from '@po-ui/ng-components';
import { getDefaultPaciente } from '../interface/paciente';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-paciente-crud',
  templateUrl: './paciente-crud.component.html',
  styleUrls: ['./paciente-crud.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class PacienteCrudComponent implements OnInit {

  dadosPaciente = getDefaultPaciente();

  constructor() { }

  @ViewChild('dadosPacienteForm',{static: false}) dadosPacienteForm!: NgForm;

  public readonly poSelectGenero: Array<PoComboOption> = [
    {label: 'Masculino', value: 'M'},
    {label: 'Feminino', value: 'F'}
  ]

  public readonly poSelectEstadoCivil: Array<PoComboOption> = [
    {label: 'Solteiro(a)', value: 'S'},
    {label: 'Casado(a)', value: 'C'},
    {label: 'Divorciado(a)', value: 'D'},
    {label: 'Viúvo(a)', value: 'V'}

  ];

  public readonly poSelectDependencia: Array<PoComboOption> = [
    { value: 'independente', label: 'Independente' },
    { value: 'parcialmente_dependente', label: 'Parcialmente Dependente' },
    { value: 'totalmente_dependente', label: 'Totalmente Dependente' }
  ];

  public readonly poSelectConvenio: Array<PoComboOption> = [
    { value: 'unimed', label: 'Unimed' },
    { value: 'bradesco_saude', label: 'Bradesco Saúde' },
    { value: 'sulamerica', label: 'SulAmérica' },
    { value: 'outro', label: 'Outro' }
  ];

  public readonly poPageBreadcrumb: PoBreadcrumb = {
    items: [
      { label: 'Home', link: '/' },
      { label: 'Pacientes', link: '/pacientes'},
      { label: 'Cadastrar Paciente' }
    ]
  };

  ngOnInit() {
  }



  salvarCadastro(): void {
    console.log(this.dadosPaciente)
  }


  

}
