import { ActivatedRoute, Router } from '@angular/router';
import { PacienteService } from './../service/paciente.service';
import { Paciente } from './../interface/paciente';
import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { PoBreadcrumb, PoComboOption, PoSelectComponent, PoSelectOption } from '@po-ui/ng-components';
import { getDefaultPaciente } from '../interface/paciente';
import { NgForm } from '@angular/forms';

@Component({
    selector: 'app-paciente-crud',
    templateUrl: './paciente-crud.component.html',
    styleUrls: ['./paciente-crud.component.css'],
    encapsulation: ViewEncapsulation.None,
    standalone: false
})
export class PacienteCrudComponent implements OnInit {

  dadosPaciente = getDefaultPaciente();

  constructor(
    private pacienteService: PacienteService,
    private activatedRoute: ActivatedRoute
  ) { }

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
    { value: 'I', label: 'Independente' },
    { value: 'P', label: 'Parcialmente Dependente' },
    { value: 'T', label: 'Totalmente Dependente' }
  ];

  public readonly poSelectConvenio: Array<PoComboOption> = [
    { value: 'unimed', label: 'Unimed' },
    { value: 'bradesco_saude', label: 'Bradesco Saúde' },
    { value: 'sulamerica', label: 'SulAmérica' },
    { value: 'outro', label: 'Outro' }
  ];

  public readonly poSelectSimNao: Array<PoSelectOption> = [
    { value: 'S', label: 'Sim' },
    { value: 'N', label: 'Não' }
  ]

  public readonly poPageBreadcrumb: PoBreadcrumb = {
    items: [
      { label: 'Home', link: '/' },
      { label: 'Pacientes', link: '/pacientes'},
      { label: 'Cadastrar Paciente' }
    ]
  };

  ngOnInit() {
    this.activatedRoute.params.subscribe(param=> {

      if('CID' in param ) {
         this.pacienteService.buscar(param['CID']).subscribe(
          (res)=> {
            this.dadosPaciente = res;
            this.dadosPacienteForm.form.patchValue(this.dadosPaciente);
            console.log(this.dadosPaciente);
          }
         )
      } else {
        this.dadosPaciente = getDefaultPaciente();
      }
    })


  }



  salvarCadastro(): void {

    if(this.dadosPacienteForm.valid) {
      this.dadosPaciente = this.dadosPacienteForm.value;
      console.log(this.dadosPaciente);
      if('CID' in this.activatedRoute.snapshot.params) {
        this.pacienteService.atualizar(this.dadosPaciente).subscribe();
      } else {
        this.pacienteService.cadastrar(this.dadosPaciente).subscribe();
      }
    } else {

    }


  }

}
