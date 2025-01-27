import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PoPageAction, PoTableAction, PoTableColumn } from '@po-ui/ng-components';
import { PacienteLista } from '../interface/paciente';

@Component({
  selector: 'app-paciente-lista',
  templateUrl: './paciente-lista.component.html',
  styleUrls: ['./paciente-lista.component.css']
})
export class PacienteListaComponent implements OnInit {

  dadosTabelaPrincipal: Array<PacienteLista> = [];

  public readonly tabelaPrincipalColumns: Array<PoTableColumn> = [

    { property: 'codigo', label: 'Código' },
    { property: 'nomeCompleto', label: 'Nome Completo' },
    { property: 'genero', label: 'Gênero' },
    { property: 'dataNascimento', label: 'Data de Nascimento', type: 'dateTime', format: 'dd/MM/yyyy' },
    { property: 'dataAdmissao', label: 'Data de Admissão', type: 'dateTime',format: 'dd/MM/yyyy' },
  ];  

  public readonly tabelaPrincipalActions: Array<PoTableAction> = [
    { icon: 'po-icon-edit', label: '', action:  this.goToEdicao.bind(this) },
  ];

  constructor(
    private route: Router,
  ) { }

  public readonly pageActions: Array<PoPageAction> = [
    { label: 'Cadastrar', action: this.goToCadastro.bind(this) }
  ];

  ngOnInit() {
    this.getDados();
  }


  getDados(): void {
    this.dadosTabelaPrincipal = [
      { codigo: 'P001', nomeCompleto: 'Nome do Paciente 1', genero: 'M', dataNascimento: new Date('1990-01-01'), dataAdmissao: new Date('2020-01-01') },
      { codigo: 'P002', nomeCompleto: 'Nome do Paciente 2', genero: 'F', dataNascimento: new Date('1995-05-10'), dataAdmissao: new Date('2021-02-15') },
    ];
  }

  goToEdicao(item: PacienteLista): void {
    this.route.navigate(['paciente', 'editar-cadastro', item.codigo]);
  }

  goToCadastro(): void {
    this.route.navigateByUrl('/paciente/cadastro');
  }
}
